import axios from 'axios';
import { notification, Modal } from 'antd';
import userInfo from '@/store/userStore';
const request = axios.create({
  // 默认地址请求地址，可在 .env 开头文件中修改
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 60000 // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(
  function (config: any) {
    const token = userInfo.getState().userInfo.token;
    config.headers['token'] = token;
    //mock数据接口，需要添加apifoxToken头信息，值为apifox平台的token值，正式环境需要去掉注释
    config.headers['apifoxToken'] = 'JFlKquQ8HXugjUkxNOE7n';
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
      data: { code, msg }
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
          }
        });
        return;
      }
      notification.error({
        message: '请求错误',
        description: msg || '请求错误，请联系管理员'
      });
      return Promise.reject();
    }
    return response.data;
  },
  function (error) {
    notification.error({
      message: '请求错误',
      description: error.msg || '请求错误，请联系管理员'
    });
    return Promise.reject(error);
  }
);

export default request;
