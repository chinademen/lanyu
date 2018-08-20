import React, { PureComponent } from 'react';
import { Form, Modal, Input, message } from 'antd';
import md5 from "md5";
const FormItem = Form.Item;
message.config({
    top: 100,
    delay: 3,
    maxCount: 1,
});
const Action = {
    add: 'add',
};

@Form.create()
class AddMember extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    okHandle = () => {
        const { form, handleAllCommit } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            const { userPassword, confirmUserPassword } = fieldsValue;
            if (userPassword !== confirmUserPassword) {
                message.error('两次输入密码不一致');
                return;
            }
            if (!fieldsValue.currentCompanyName) delete fieldsValue.currentCompanyName;
            fieldsValue.userPassword = md5(userPassword);
            delete fieldsValue.confirmUserPassword;
            handleAllCommit(Action.add, fieldsValue);  // 提交数据
        });
    }

    cancelHandle = () => {
        this.props.handleModalVisible(Action.add, false);
    }
    
    render() {
        const { form, modalVisible } = this.props;
        return (
            <Modal 
                className="addMemberModal" 
                title="新增会员" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="会员账号">
                    {form.getFieldDecorator('userAccount', {
                        rules: [
                            { required: true, whitespace: true, message: '会员账号不能为空' },
                            {
                                pattern: /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/,
                                message: '会员账号只能是中文、数字,字母 长度为1~20位'
                            }
                        ],
                    })(<Input placeholder="会员账号" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="会员姓名">
                    {form.getFieldDecorator('userName', {
                        rules: [
                            { required: true, whitespace: true, message: '会员姓名不能为空' },
                            {
                                pattern: /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/,
                                message: '会员姓名只能是中文、数字,字母 长度为1~20位'
                            }
                        ],
                    })(<Input placeholder="会员姓名" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="密码">
                    {form.getFieldDecorator('userPassword', {
                        rules: [
                            { required: true, whitespace: true, message: '密码不能为空' },
                            {
                                pattern: /^[0-9A-Za-z]{3,8}$/,
                                message: '密码为3-8位数字或字母'
                            }
                        ],
                    })(<Input type="password" placeholder="密码" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="再次输入">
                    {form.getFieldDecorator('confirmUserPassword', {
                        rules: [
                            { required: true, whitespace: true, message: '密码不能为空' },
                            {
                                pattern: /^[0-9A-Za-z]{3,8}$/,
                                message: '密码为3-8位数字或字母'
                            }
                    ],
                    })(<Input type="password" placeholder="再次输入密码" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="级别">
                    {form.getFieldDecorator('level', {
                        initialValue: '二级',
                    })(<Input disabled />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="余额">
                    {form.getFieldDecorator('balance', {
                        initialValue: 0,
                    })(<Input disabled />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="所在公司">
                    {form.getFieldDecorator('currentCompanyName', {
                    })(<Input placeholder="所在公司" />)}
                </FormItem>
            </Modal>
        );
    }
}

export default AddMember;