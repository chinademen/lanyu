/* 页脚 */
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './index.less';

@inject('commonStore')
@observer
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { ggList } = this.props.commonStore;
        return (
            <div className="footer">
                {/* 公司信息 */}
                <div className="footer-info">
                    <div className="footer_about">
                        <a target="_blank" style={{ width: 76 }}>关于xxx咨询</a>
                        <a target="_blank" style={{ width: 86 }}>关于xxx社区</a>
                        <a target="_blank" style={{ width: 64 }}>加入我们</a>
                        <a target="_blank" style={{ width: 118 }}>广告刊登/合作提案</a>
                        <a target="_blank" style={{ borderRight: 'none' }}>投诉举报</a>
                    </div>
                    <div className="footer_shengming">
                        重要声明：本网站是以时时留言的方式运作，本站对于所有留言的真实性、完整性及立场等，不负任何法律责任。而一切留言的言论只代表留言者个人意见，并非本网站的立场，用户不应该信赖内容，并应自行判断内容的真实性。由于讨论区是受到[时时留言]运作方式所限制，故不能完全监察所有时时留言，若读者发现有留言出现问题，请联系我们。本站有权删除任何留言及拒绝任何人士留言，同时亦有不删除留言的权力。切勿撰写粗言秽语、诽谤、渲染色情暴力或人身攻击的言论，敬请自律。本网站保留一切法律权利。
                        <img style={{ display: 'block', margin: '0 auto' }} src={require('../../static/images/footer_shengming.jpg')} />
                    </div>
                </div>
                {/* 版权 */}
                <div className="footer-banquan">
                    <img src={require('../../static/images/banquan.png')} alt="版权" />
                    <p>
                        咨询版权归xxx所有 ( <a target="_blank">www.baidu.com</a> )
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer
