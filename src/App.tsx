import { mergeRoutes, Router } from '@/router';
import { BrowserRouter } from 'react-router-dom';
import AuthRouter from '@/components/AuthRouter';
import { func } from '@/utils';
import userStore from '@/store/userStore';
function App() {
  //获取路由表映射出来的 动态路由
  const userInfo = userStore((state: any) => state.userInfo);
  const dynamicRoutes = func.getDynamicRouters(userInfo.routes);
  // 静态路由，合动态路由合并。
  const routes = mergeRoutes(dynamicRoutes);
  return (
    <BrowserRouter>
      <AuthRouter>
        {/* 合并后的路由当参数传给router,更新动态路由组件 */}
        <Router routes={routes} />
      </AuthRouter>
    </BrowserRouter>
  );
}
export default App;
