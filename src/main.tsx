import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.less';
import { ConfigProvider } from 'antd'; // 国际化全局组件
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/dist/locale/zh-cn'; // 中文

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
