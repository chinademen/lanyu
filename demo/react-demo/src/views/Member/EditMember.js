import React, { PureComponent } from 'react';
import { Form, Modal, Input, message } from 'antd';
const FormItem = Form.Item;
message.config({
    top: 100,
    delay: 3,
    maxCount: 1,
});
const Action = {
    edit: 'edit',
};

@Form.create()
class EditMember extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    okHandle = () => {
        const { form, handleAllCommit } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            delete fieldsValue.userAccount;
            if (!fieldsValue.currentCompanyName) delete fieldsValue.currentCompanyName;
            handleAllCommit(Action.edit, fieldsValue);  // 提交数据
        });
    }

    cancelHandle = () => {
        this.props.handleModalVisible(Action.edit, false);
    }
    
    render() {
        const { form, modalVisible, selectedRows } = this.props;
        return (
            selectedRows.length>0 && <Modal 
                className="editMemberModal" 
                title="修改会员信息" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                {form.getFieldDecorator('id', { initialValue: selectedRows[0].id })(<Input type="hidden"/>)}
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="会员账号">
                    {form.getFieldDecorator('userAccount', {
                        initialValue: selectedRows[0].userAccount
                    })(<Input placeholder="会员账号" disabled />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="会员姓名">
                    {form.getFieldDecorator('userName', {
                        initialValue: selectedRows[0].userName,
                        rules: [
                            { required: true, whitespace: true, message: '会员姓名不能为空' },
                            {
                                pattern: /^[0-9A-Za-z\u4e00-\u9fa5]{1,20}$/,
                                message: '会员姓名只能是中文、数字,字母 长度为1~20位'
                            }
                        ],
                    })(<Input placeholder="会员姓名" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="级别">
                    {form.getFieldDecorator('level', {
                        initialValue: selectedRows[0].level,
                        rules: [
                            { required: true, whitespace: true, message: '级别不能为空' },
                        ],
                    })(<Input />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="余额">
                    {form.getFieldDecorator('balance', {
                        initialValue: selectedRows[0].balance + '',
                        rules: [
                            { required: true, whitespace: true, message: '余额不能为空' },
                            {
                                pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
                                message: '只支持到小数点后两位数, 不支持负数'
                            }
                        ],
                    })(<Input />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="所在公司">
                    {form.getFieldDecorator('currentCompanyName', {
                        initialValue: selectedRows[0].currentCompanyName,
                    })(<Input placeholder="所在公司" />)}
                </FormItem>
            </Modal>
        );
    }
}

export default EditMember;