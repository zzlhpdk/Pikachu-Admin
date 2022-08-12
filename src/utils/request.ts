import axios from 'axios';
import { notification, Button, Modal } from 'antd';
import userInfo from '@/store/userStore';
const request = axios.create({
  baseURL: '/api',
  timeout: 60000, // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(
  function (config: any) {
    const token = userInfo.getState().userInfo.token;
    config.headers['token'] = token;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  function (response: any) {
    const {
      data: { code, msg },
    } = response;
    if (code && code !== 200) {
      if (code === 401) {
        Modal.confirm({
          title: '提示',
          content: '登录已失效，请重新登录',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
        return;
      }
      notification.error({
        message: '请求错误',
        description: msg || '请求错误，请联系管理员',
      });
      return Promise.reject();
    }
    return response.data;
  },
  function (error) {
    notification.error({
      message: '请求错误',
      description: error.msg || '请求错误，请联系管理员',
    });
    return Promise.reject(error);
  }
);

export default request;
