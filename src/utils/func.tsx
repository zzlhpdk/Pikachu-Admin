// 路由处理
import { Outlet } from 'react-router-dom';
import lazyLoad from '../router/lazyLoad';
import { lazy } from 'react';
import { IRouteObject } from '@/types/router';
const modules = import.meta.glob('../pages/**/**.tsx');
import moment from 'moment';

// 根据后端传入的路由表，进行递归遍历，映射element本地组件
export const getDynamicRouters = (routes: IRouteObject[]) => {
  // 递归路由表
  const newRoutes: IRouteObject[] = routes.map((item: any) => {
    return {
      ...item,
      // 是否有组件地址，如果没有，则添加的是菜单目录，element用Outlet
      element: item.element ? (
        lazyLoad(lazy(modules[`../pages${item.element}/index.tsx`] as any))
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
//  深拷贝
export const deepClone = (data: any) => {
  const newData: any = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data[key] && data[key] === 'object') {
      newData[key] = deepClone(data[key]);
    } else {
      newData[key] = data[key];
    }
  }
  return newData;
};

// 表单时间格式化
export const formatDateTime = (formValues: any, searchData: any) => {
  const result: any = {};
  searchData.map((item: any) => {
    // 如果是日期选择器,并且里面有值的时候
    if (item.valueType === 'datePicker' && formValues[item.dataIndex]) {
      switch (item.picker) {
        case 'year':
          result[item.dataIndex] = moment(formValues[item.dataIndex]).format(
            'YYYY'
          );
          break;
        case 'month':
          result[item.dataIndex] = moment(formValues[item.dataIndex]).format(
            'YYYY-MM'
          );
          break;
        default:
          result[item.dataIndex] = moment(formValues[item.dataIndex]).format(
            'YYYY-MM-DD HH:mm:ss'
          );
          break;
      }
      return;
    }
    // 如果是时间范围选择器,并且里面有值的时候
    if (item.valueType === 'dateRange' && formValues[item.dataIndex]) {
      result[item.dataIndex] = formValues[item.dataIndex].map(
        (time: any, index: number) => {
          if (item.showTime) {
            return index === 0
              ? moment(time).format('YYYY-MM-DD 00:00:00')
              : moment(time).format('YYYY-MM-DD 23:59:59');
          } else {
            return moment(time).format('YYYY-MM-DD HH:mm:ss');
          }
        }
      );
      return;
    }
    result[item.dataIndex] = formValues[item.dataIndex];
  });
  return result;
};
