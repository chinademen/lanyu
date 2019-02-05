import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import throttle from 'lodash.throttle';
import { Form, Input, Button, Card, Icon, message } from 'antd';
import './index.less';

message.config({ top: 100, delay: 3, maxCount: 1 });
const FormItem = Form.Item;

@Form.create()
@inject(({ commonStore }) => {
  return {
    userLogin: commonStore.userLogin
  }
})
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
       
        };
        // 风门, 防同一秒内多次触发同一事件
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClickThrottled = throttle(this.handleSubmit, 1000);
    }

    componentWillUnMount() {
      this.handleClickThrottled.cancel();
    }

    // 登入
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) return;
        this.props.userLogin(values, res => {
          message.success(res.message)
          this.props.history.replace('/views/admin')
        })
      });
    }

    render() {
        const { form: { getFieldDecorator } } = this.props;
        
        return (
          <div className="main">
            <Card className="content" bordered={false}>
              <Form onSubmit={this.handleClickThrottled} className="login-form">
                <FormItem>
                  {getFieldDecorator('userAccount', {
                    rules: [{ required: true, max: 15, message: '管理员账号为6-15位 数字+字母' }],
                  })(
                    <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('userPassword', {
                    rules: [{ required: true, max: 12, message: '管理员密码为6-12位 数字+字母' }],
                  })(
                    <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                  )}
                </FormItem>
                <FormItem>
                  <Button type="primary" size="large" htmlType="submit" className="login-form-button">
                    登入
                  </Button>
                </FormItem>
              </Form>
            </Card>
          </div>
        );
    }
}

export default Login
