/* 免费广告区 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // 生成广告列表
    createGgList(ggList) {
        if (ggList) {
            ggList = Array.prototype.slice.call(ggList);
            const list = ggList.map((item, index) => {
                return (
                    <div className="gg-item"
                         key={[index]}
                         style={{ backgroundImage: `url(${item.imgUrl})` }} 
                         onClick={() => this.toGgCompany()}
                    ></div>
                    // <img src={item.imgUrl} 
                    //      key={[index]} 
                    //      alt={item.ggName}  
                    //      onClick={() => this.toGgCompany()}     
                    // />
                )
            });
            return list;
        }
    }

    // 跳转到其他广告页面
    toGgCompany() {

    }

    render() {
        let { ggList } = this.props.commonStore;
        return (
            <div className="gg-box">
                {/* {this.createGgList(ggList)} */}
                <img src={require('../../static/images/gg1.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg2.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg3.gif')} alt="广告图片" />
                {/* <img src={require('../../static/images/gg4.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg5.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg6.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg7.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg8.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg9.gif')} alt="广告图片" />
                <img src={require('../../static/images/gg10.png')} alt="广告图片" /> */}
                
            </div>
        )
    }
}

export default MainContent
