import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Card, Icon, Avatar } from 'antd';
import md5 from "md5";
import './Login.less';
import { LOGIN_GETVERIFY, LOGIN_USERLOGIN } from '@/redux/reducers/login';
const { Meta } = Card;
const FormItem = Form.Item;

@Form.create()
class LoginPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
       
        };
    }

    componentDidMount() {

    }

    // 登入
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (err) return;
        values.userPassword = md5(values.userPassword);
        this.props.dispatch({
          type: LOGIN_USERLOGIN,
          payload: values
        });
      });
    }

    // 刷新验证码
    fleshVercode = () => {
      document.getElementsByClassName('LAY-user-get-vercode')[0].src = `/api/getVerify?time=${new Date().getTime()}`;
    }

    render() {
        const { form: { getFieldDecorator } } = this.props;
        
        return (
          <div className="main">
            <Meta
              className="header"
              avatar={<Avatar src="../../favicon.ico" />}
              title="游戏管理平台"
            />
            <a href="javascript:;">账号密码登录</a>
            <Card className="content" bordered={false}>
              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('userAccount', {
                    rules: [{ required: true, max: 15, message: '管理员账号为6-15位 数字+字母' }],
                  })(
                    <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名/admin" />
                  )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('userPassword', {
                    rules: [{ required: true, max: 12, message: '管理员密码为6-12位 数字+字母' }],
                  })(
                    <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码/111" />
                  )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('validCode', {
                    rules: [{ required: true, max: 5, message: '验证码不能超过5位' }],
                  })(
                    <Input size="large" prefix={<Icon type="picture" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                    addonAfter={<img className="LAY-user-get-vercode" src="/api/getVerify" style={{ width: 100, height: 38 }} alt="验证码"
                    onClick={this.fleshVercode} />}  placeholder="图形验证码" />
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

const mapStateToProps = (state) => {
  return ({

  });
}

export default connect(mapStateToProps)(LoginPage);
