import React, { Component } from 'react'
import { Row, Col, Form, Modal, Input, message } from 'antd'
import BraftEditor from 'braft-editor' // 富文本
import 'braft-editor/dist/index.css' // 富文本样式
import 'braft-extensions/dist/emoticon.css' // 富文本表情包组件样式
import Emoticon, { defaultEmoticons } from 'braft-extensions/dist/emoticon' // 表情包组件和默认表情包列表

// 转换默认表情包列表，让webpack可以正确加载到默认表情包中的图片，请确保已对png格式的文件配置了loader
const emoticons = defaultEmoticons.map(item => require(`braft-extensions/dist/assets/${item}`));

// 也可以使用自己的表情包资源，不受打包工具限制
// const emoticons = ['http://path/to/emoticon-1.png', 'http://path/to/emoticon-2.png', 'http://path/to/emoticon-3.png', 'http://path/to/emoticon-4.png', ...]

// 转换自定义表情包
BraftEditor.use(Emoticon({
    includeEditors: ['demo-editor-with-emoticon'],
    emoticons: emoticons
}));

// 富文本显示的功能列表
// const controls = ['emoji', 'media'];

const FormItem = Form.Item;
message.config({ top: 100, duration: 3, maxCount: 1 });
const Action = {
    edit: 'edit',
};

@Form.create()
class EditCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            title: '',
            author: '',
            views: '',
            points: '',
            content: BraftEditor.createEditorState(null),  // 富文本文章内容
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedRows) {
            const { id, title, author, views, points, content } = nextProps.selectedRows;
            this.setState({
                id,
                title,
                author,
                views,
                points,
                content: BraftEditor.createEditorState(content)
            })
        }
    }

    // input改变
    handleChange = (name, e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    // 文章内容修改
    handleChangeEditor = (content) => {
        const htmlString = content.toHTML();
        this.setState({ content: htmlString });
    }

    okHandle = () => {
        let fieldsValue = {};
        for (var key in this.state) {
            fieldsValue[key] = this.state[key] || '-'
        }
        this.props.handleAllCommit(Action.edit, fieldsValue);  // 提交数据
    }

    cancelHandle = () => {
        this.props.handleModalVisible(Action.edit, false);
    }
    
    render() {
        const { modalVisible, selectedRows } = this.props;
        const { id, title, author, views, points, content } = selectedRows;
        return (
            <Modal 
                className="editCaseModal" 
                title="修改文章" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                <input name="title" placeholder="标题" value={this.state.id} type="hidden" />
                <Row>
                    <Col span={2}>标题：</Col>
                    <Col span={20}>
                        <Input name="title" placeholder="标题" defaultValue={title} value={this.state.title} onChange={(e) => this.handleChange('title', e)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>作者：</Col>
                    <Col span={20}>
                        <Input name="author" placeholder="作者" defaultValue={author} value={this.state.author} onChange={(e) => this.handleChange('author', e)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>访问量：</Col>
                    <Col span={20}>
                        <Input name="views" placeholder="访问量" defaultValue={views} value={this.state.views} onChange={(e) => this.handleChange('views', e)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>点赞数量：</Col>
                    <Col span={20}>
                        <Input name="points" placeholder="点赞数量" defaultValue={points} value={this.state.points} onChange={(e) => this.handleChange('points', e)} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>内容：</Col>
                    <Col span={20}>
                        <BraftEditor
                            id="demo-editor-with-emoticon"
                            // controls={controls}
                            contentStyle={{ minHeight: 400, boxShadow: 'inset 0 1px 3px rgba(0,0,0,.1)' }}
                            defaultValue={content}
                            value={this.state.content}
                            onChange={this.handleChangeEditor}
                        />
                    </Col>
                </Row>
            </Modal>
        );
    }
}

export default EditCase;