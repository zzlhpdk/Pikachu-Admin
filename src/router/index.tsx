import { Navigate, useRoutes } from 'react-router-dom';
import { lazy } from 'react';
import { IRouteObject } from '@/types/router';
import lazyLoad from './lazyLoad';
//合并静态动态路由
export const mergeRoutes = (dynamicRoutes: IRouteObject[]) => {
  return [
    {
      path: '/',
      element: lazyLoad(lazy(() => import('@/Layouts'))),
      meta: {
        title: '后台管理系统',
      },
      children: [
        {
          index: true,
          path: '/home',
          element: lazyLoad(lazy(() => import('@/pages/Home'))),
          meta: {
            title: '主页',
          },
        },
        ...dynamicRoutes,
      ],
    },
    {
      path: '/login',
      element: lazyLoad(lazy(() => import('@/pages/Login'))),
      meta: {
        title: '登录页',
      },
    },
    {
      path: '/404',
      element: lazyLoad(lazy(() => import('@/pages/ErrorMessage/404'))),
      meta: {
        title: '404页面',
      },
    },
    {
      path: '/403',
      element: lazyLoad(lazy(() => import('@/pages/ErrorMessage/403'))),
      meta: {
        requiresAuth: false,
        title: '403页面',
      },
    },
    {
      path: '*',
      element: <Navigate to="/404" />,
    },
  ];
};
//获取传来的所有路由表，并使用useRoutes方法渲染路由表。
export const Router = ({ routes }: { routes: IRouteObject[] }) =>
  useRoutes(routes);
