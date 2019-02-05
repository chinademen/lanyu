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
    edit: 'edit',
};

@Form.create()
class EditUser extends PureComponent {
    okHandle = () => {
        const { form, handleAllCommit } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            for (var i in fieldsValue) {
                if(!fieldsValue[i]) fieldsValue[i] = '-';
            }
            handleAllCommit(Action.edit, fieldsValue);  // 提交数据
        });
    }

    cancelHandle = () => {
        this.props.handleModalVisible(Action.edit, false);
    }
    
    render() {
        const { form, modalVisible, selectedRows } = this.props;
        const { id, username, telphone, qq, wechat, address, remark } = selectedRows;
        return (
            <Modal 
                className="EditUserModal" 
                title="修改客户资料" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                {form.getFieldDecorator('id', {
                    initialValue: id + ''
                })(<Input type="hidden" />)}
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
                    {form.getFieldDecorator('username', {
                        initialValue: username,
                    })(<Input placeholder="客户姓名" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话号码">
                    {form.getFieldDecorator('telphone', {
                        initialValue: telphone,
                    })(<Input placeholder="客户电话号码" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="qq">
                    {form.getFieldDecorator('qq', {
                        initialValue: qq,
                    })(<Input placeholder="客户qq" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="微信">
                    {form.getFieldDecorator('wechat', {
                        initialValue: wechat,
                    })(<Input placeholder="客户微信" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
                    {form.getFieldDecorator('address', {
                        initialValue: address,
                    })(<Input placeholder="客户地址" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="备注">
                    {form.getFieldDecorator('remark', {
                        initialValue: remark,
                    })(<Input placeholder="备注信息" />)}
                </FormItem>
            </Modal>
        );
    }
}

export default EditUser;