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
class AddUser extends PureComponent {
    okHandle = () => {
        const { form, handleAllCommit } = this.props;
        form.validateFields((err, fieldsValue) => {
            if (err) return;
            for (var i in fieldsValue) {
                if(!fieldsValue[i]) fieldsValue[i] = '-';
            }
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
                className="addUserModal" 
                title="新增客户" 
                visible={modalVisible} 
                onOk={() => this.okHandle()} 
                onCancel={() => this.cancelHandle()} 
                destroyOnClose={true}
            >
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="姓名">
                    {form.getFieldDecorator('username', {
                    })(<Input placeholder="客户姓名" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="电话号码">
                    {form.getFieldDecorator('telphone', {
                    })(<Input placeholder="客户电话号码" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="qq">
                    {form.getFieldDecorator('qq', {
                    })(<Input placeholder="客户qq" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="微信">
                    {form.getFieldDecorator('wechat', {
                    })(<Input placeholder="客户微信" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="地址">
                    {form.getFieldDecorator('address', {
                    })(<Input placeholder="客户地址" />)}
                </FormItem>
                <FormItem labelCol={{ span: 5 }} wrapperCol={{ span: 15 }} label="备注">
                    {form.getFieldDecorator('remark', {
                    })(<Input placeholder="备注信息" />)}
                </FormItem>
            </Modal>
        );
    }
}

export default AddUser;