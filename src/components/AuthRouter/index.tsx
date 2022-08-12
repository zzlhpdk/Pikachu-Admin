/**
 * @description 路由守卫组件
 * */
import { Navigate, useLocation } from 'react-router-dom';
import userStore from '@/store/userStore';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
const AuthRouter = ({ children }: any) => {
  NProgress.start();
  const { pathname } = useLocation();
  //如果不是login，判断是否有token
  const { token } = userStore();
  // 如果去login，放行
  if (pathname === '/login') {
    NProgress.done();
    return children;
  }
  // * 判断是否有Token,如果没token.跳到登陆页
  if (!token) return <Navigate to="/login" replace />;
  NProgress.done();
  return children;
};

export default AuthRouter;
