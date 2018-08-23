import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card, Row, Col, Upload, Button, Icon, message, Modal } from 'antd';
import { WEB_UPLOADCOMPANYLOGO } from '@/redux/reducers/web';
import { getFileName } from '@/util/format';
import './WebSet.less';
const { Meta } = Card;

class WebSet extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],       // 公司LOGO文件  
            uploading: false,   // loading
        };
    }

    componentDidMount() {
        const { login: { companyLogo } } = this.props;
        let fileList = [{
            uid: '-1',
            name: getFileName(companyLogo),
            url: companyLogo
        }];
        this.setState({ fileList });
    }

    // 上传公司LOGO
    handleUpload = () => {
        const { companyId } = this.props.login;
        const { fileList } = this.state;
        // 组装FormData数据
        const formData = new FormData();
        fileList.forEach(file => {
            formData.append('file', file);              //  修改的文件
            formData.append('companyId', companyId);    //  修改文件的公司ID
        });
        
        // 上传中
        this.setState({ uploading: true });

        this.props.dispatch({
            type: WEB_UPLOADCOMPANYLOGO,
            payload: formData
        });

        // 上传成功
        this.setState({ uploading: false });
    }

    render() {
        const { login: { companyLogo } } = this.props;
        let { uploading, fileList } = this.state;

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
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16} style={{ 'marginBottom': '30px' }}>
                    <Col span={8}>
                        <Card title="上传公司LOGO" hoverable>
                            {companyLogo && (<Upload 
                                {...uploadProps}
                            >
                                <Button>
                                    <Icon type="upload" /> 选择文件
                                </Button>
                            </Upload>)}
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
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card title="其他功能" hoverable>
                        </Card>
                    </Col>

                    <Col span={8}>
                        <Card title="其他功能" hoverable>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { login, web } = state;
    return ({
      login,
      web
    });
}
  
export default connect(mapStateToProps)(WebSet);