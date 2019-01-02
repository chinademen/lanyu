import React, { Component } from 'react';
import { createAnimation, clearAnimation } from '@/utils/animation';
import './index.less';

// 速度
let sd = -1;

export default class BasicCarousel extends Component {
    constructor(props) {
        super(props);
        /**
         * @desc    接口参数
         * @param   {[Array]}           list        [图片数组] [{url, fn}] url: 每一个图片的src;   fn: 每一个图片自定义绑定的事件
         * @param   {[Boolean]}         control     [控制上下滚轮是否显示]  默认不显示
         * @param   {[Number|String]}   width       [容器宽度]  默认 420px
         * @param   {[Number|String]}   height      [容器高度]  默认 420px
         * @param   {[Number|String]}   showItems   [容器同时显示几张图片]  默认 2 张
        */
        const { list, control, width, height, showItems } = this.props;
        const W = width || '420px';
        const H = height || '420px';
        const pics = showItems || 2;
        const ImgH = parseInt(H) / pics;
        this.state = {
            W: W, // 容器宽度,
            H: H, // 容器高度,
            pics: pics, // 容器同时显示图片的个数
            ImgH: ImgH, // 每张图片的高度
        };
    }

    componentDidMount() {
        // 加载动画
        createAnimation(this.updonghua);
    }

    // 轮播动画
    updonghua = () => {
        const { pics, ImgH } = this.state;
        const { list } = this.props;
        // 当ul滚到底部的top要减去两个图片的高度
        const len = list.length - pics;
        let dom = document.querySelector('.basicCarousel ul');
        const t = parseInt(dom.style.top);
        // 到顶
        if (t === 0) {
            sd = -1;          
        }
        // 到底
        if (t === (len * -ImgH)) {
            sd = 1;
        }
        dom.style.top = `${dom.offsetTop + sd}px`;
        // 清除动画
        clearAnimation(window.carouselAnimation);
    }

    // 生成轮播图片
    createItem = (list) => {
        const { W, ImgH } = this.state;
        const result = list.map((item, index) => {
            return (
                <li key={[index]}>
                    <img src={item.src} onClick={item.fn} style={{ width: W, height: ImgH  }}></img>
                </li>
            )
        });
        return result;
    }

    // 向上滚动
    handleSrollUp = (list, pics, ImgH) => {
        const { ImgH } = this.state;
        let dom = document.querySelector('.basicCarousel ul');
        const t = parseInt(dom.style.top);
        let r = Math.ceil(t / ImgH);
        // 到顶 : 向上跳一张
        dom.style.top = (r !== 0) ? `${r * ImgH}px` : '0px';
    }
    
    // 向下滚动
    handleSrollDown = (list, pics, ImgH) => {
        const { pics, ImgH } = this.state;
        // 当ul滚到底部的top要减去容器内同时显示的图片数量的高度
        const len = list.length - pics;
        let dom = document.querySelector('.basicCarousel ul');
        const t = parseInt(dom.style.top);
        let r = Math.floor(t / ImgH);
        // 到底 : 向下跳一张
        dom.style.top = (r !== -len) ? `${r * ImgH}px` : `${len * -ImgH}px`;
    }

    render() {
        const { list, control } = this.props;
        const { W, H } = this.state;

        return (
            <div className="basicCarousel"
                 style={{ width: width || W, height: height || H }}
            >
                {control && <span className="scrollUp" onClick={() => this.handleSrollUp(list, pics, ImgH)}></span>}
                <ul style={{ top: 0 }}>
                    {this.createItem(list, height, pics)}
                </ul>
                {control && <span className="scrollDown" onClick={() => this.handleSrollDown(list, pics, ImgH)}></span>}
            </div>
        )
    }

}