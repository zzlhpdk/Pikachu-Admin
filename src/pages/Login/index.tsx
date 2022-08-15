import { useEffect, useState } from 'react';
import userStore from '@/store/userStore';
import layoutStore from '@/store/layoutStore';

import { Button, Form, Input, Card, message, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { loginApi, userInfoApi } from '@/service/user';
import './style.less';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import login_left from '@/assets/images/login/login_left.png';
import logo from '@/assets/images/login/logo.png';
import { func } from '@/utils';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { setToken, setUserInfo, resetUserStore, setFlatRoutes } = userStore();
  const { resetLayoutStore } = layoutStore();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  useEffect(() => {
    resetUserStore();
    resetLayoutStore();
  }, []);

  const onFinish = async (values: any) => {
    setLoading(true);
    values.pwd = Number(values.pwd);
    const response = await loginApi(values).finally(() => setLoading(false));
    setToken(response.data);
    getUserInfo(response.data.access_token);
  };
  const onFinishFailed = () => {
    message.error('输入错误');
  };
  const getUserInfo = async (token: string) => {
    const response = await userInfoApi(token);
    setUserInfo(response.data);
    //设置扁平化路由
    const flatRoutes = func.flatRoutes(response.data.routes);
    setFlatRoutes(flatRoutes);
    navigate('/home');
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <img src={login_left} alt="login" />
        </div>
        <div className="login-right">
          <div className="right-title">
            <img alt="name" src={logo} />
            <span className="title-name">Pikachu-Admin</span>
          </div>
          <Form
            style={{ width: '100%' }}
            name="basic"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{ code: 'admin', pwd: 123456 }}
            form={form}
          >
            <Form.Item
              name="code"
              rules={[{ required: true, message: '请输入账号' }]}
            >
              <Input addonAfter={<UserOutlined />} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
              name="pwd"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password
                addonAfter={<LockOutlined />}
                style={{ width: '100%' }}
              />
            </Form.Item>
            <div className="buttons">
              <Button type="primary" htmlType="submit" loading={loading}>
                登录
              </Button>
              <Button onClick={onReset} loading={loading}>
                重置
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
