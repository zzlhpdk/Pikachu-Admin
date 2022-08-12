// 路由处理
import { Outlet } from 'react-router-dom';
import lazyLoad from '../router/lazyLoad';
import { lazy } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { IRouteObject } from '@/types/router';

// 根据后端传入的路由表，进行递归遍历，映射element本地组件
export const getDynamicRouters = (routes: IRouteObject[]) => {
  // 递归路由表
  const newRoutes: IRouteObject[] = routes.map((item: any) => {
    return {
      ...item,
      // 是否有组件地址，如果没有，则添加的是菜单目录，element用Outlet
      element: item.element ? (
        lazyLoad(lazy(() => import(`../pages${item.element}`)))
      ) : (
        <Outlet />
      ),
      children:
        item.children && item.children.length
          ? getDynamicRouters(item.children)
          : null,
    };
  });
  return newRoutes;
};
// 获取扁平路由
export const flatRoutes = (routes: any, array: any = [], parentPath = '') => {
  routes.forEach((item: any) => {
    array.push({
      key: item.path,
      title: item.meta.title,
      fullpath: `${parentPath}/${item.path}`,
    });
    if (item.children) {
      flatRoutes(item.children, array, `${parentPath}/${item.path}`);
    }
  });
  return [
    {
      key: 'home',
      title: '首页',
      fullpath: '/home',
    },
    ...array,
  ];
};
