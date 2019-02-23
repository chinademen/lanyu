import React, { Component } from 'react'
import { Row, Col, Modal, message, Upload, Icon, Button } from 'antd'

// 获取字符串中最后一个 / 后面的内容
function getFileName(url) {
    if (!url) return;
    var index = url.lastIndexOf('\/');
    return url.substring(index + 1, url.length);
}

message.config({ top: 100, duration: 3, maxCount: 1 });
const Action = {
    update: 'update',
};

class UpdateImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],       // 图片
            uploading: false,   // loading
        };
    }

    componentDidMount() {
        const { selectedRows: { imageurl } } = this.props;
        let fileList = [{
            uid: '-1',
            name: getFileName(imageurl),
            url: imageurl
        }];
        this.setState({ fileList });
    }

    // 上传公司LOGO
    handleUpload = () => {
        const { id } = this.props.selectedRows;
        const { fileList } = this.state;
        // 组装FormData数据
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('file', file);   //  修改的文件
            formData.append('id', id);    //  修改文件的id
        });
        
        // 上传中
        this.setState({ uploading: true });

        this.props.handleAllCommit(Action.update, formData); // 提交数据

        // 上传成功
        this.setState({ uploading: false });
    }

    okHandle = () => {
        this.props.handleModalVisible(Action.update, false);
    }

    cancelHandle = () => {
        this.props.handleModalVisible(Action.update, false);
    }
    
    render() {
        const { modalVisible } = this.props;
        let { uploading } = this.state;

        const uploadProps = {
            listType: 'picture',            // 上传格式
            onRemove: (file) => {           // 删除文件
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: (file) => {       // 手动上传文件之前处理文件
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;   // 返回fasle 为手动上传
            },
            onChange: (info) => {           // 图片切换回调
                // 限制只能上传一张图片
                let { file } = info;
                this.setState({
                    fileList: [file],
                })
            },
            fileList: this.state.fileList
        }

        return (
            <Modal 
                className="updateImageModal" 
                title="上传图片" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                <Row>
                    <Col span={5}>图片：</Col>
                    <Col span={19}>
                        <Upload 
                            {...uploadProps}
                        >
                            <Button>
                                <Icon type="upload" /> 选择文件
                            </Button>
                        </Upload>
                        <Button
                            className="upload-demo-start"
                            style={{ marginTop: '8px' }}
                            type="primary"
                            onClick={this.handleUpload}
                            disabled={this.state.fileList.length === 0}
                            loading={uploading}
                            >
                            <Icon type="play-circle" />
                            {uploading ? 'Uploading' : '开始上传' }
                        </Button>
                    </Col>
                </Row>
            </Modal>
        );
    }
}

export default UpdateImage;