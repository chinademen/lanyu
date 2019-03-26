/*
 * 侧边悬浮组件
 */
import React, { Component, Fragment } from 'react'
import './index.less'

export default class Fabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxAnimation: null,
            btnAnimation: null,
        }
    }

    // 收起
    collapse = (suffix) => {
        this.setState({
            boxAnimation: `fabBoxHide_${suffix}`,
            btnAnimation: `fabBtnShow_${suffix}`
        })
    }

    // 展开
    expand = (suffix) => {
        this.setState({
            boxAnimation: `fabBoxShow_${suffix}`,
            btnAnimation: `fabBtnHide_${suffix}`
        })
    }

    render() {
        /**
         * @desc    接口参数
         * @param   {[Object]}  style      [盒子样式]
         * @param   {[Object]}  iconStyle  [收起按钮样式]
         * @param   {[Object]}  btnStyle   [展开按钮样式]     
         * @param   {[String]}  title      [展开按钮文字]
         * @param   {[String]}  iconhide   [自定义收起icon的class]
         * @param   {[String]}  iconshow   [自定义展开icon的class]
         * @param   {[String]}  position   [组件位置]
        */
        let { style, iconStyle, btnStyle, title, iconhide, iconshow, position } = this.props;
        const { boxAnimation, btnAnimation } = this.state;
        iconhide = iconhide || 'icon-side-fold';
        iconshow = iconshow || 'icon-side-collapse';
        position = position || 'left';
        // 组件初始化位置、动画名后缀、icon图标重置
        let boxPosition = 'cm_left_0';
        let btnPosition = 'cm_left_36';
        let suffix = 'left';
        if (position === 'right') {
            boxPosition = 'cm_right_0';
            btnPosition = 'cm_right_36';
            suffix = 'right';
            iconshow = 'icon-side-fold';
            iconhide = 'icon-side-collapse';
        }

        return (
            <Fragment>
                <div className={`cm-fabs-box ${boxAnimation} ${boxPosition}`} style={style || null}>
                    <span className={`cm-fabs-icon ${iconhide}`} onClick={() => this.collapse(suffix)} style={[iconStyle || null]}></span>
                </div>
                <div className={`cm-fabs-btn ${btnAnimation} ${btnPosition}`} onClick={() => this.expand(suffix)} style={btnStyle || null}>
                    <span className={`cm-task-title`}>{title || `新手大礼`}</span>
                    <i className={`${iconshow}`}></i>
                </div>
            </Fragment>
        )
    }
}
