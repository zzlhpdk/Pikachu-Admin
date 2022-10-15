import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import layoutStore from '@/store/layoutStore';
import logo from '@/assets/images/login/logo.png';
import userStore from '@/store/userStore';
import * as Icons from '@ant-design/icons';
import { func } from '@/utils';

const LayoutSider = ({ Sider }: { Sider: any }) => {
  const { collapsed } = layoutStore();
  const {
    userInfo: { routes },
  } = userStore();
  const [items, setItems] = useState<any>([]);
  const [selectedKeys, setSelectedKeys] = useState<any>([]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const renderSiderMenu = async () => {
      const siderItems = await formatSiderItem(routes);
      setItems([
        {
          key: '/home',
          label: '首页',
          icon: <UserOutlined />,
        },
        ...siderItems,
      ]);
    };
    // 渲染侧边栏菜单
    renderSiderMenu();
  }, []);
  useEffect(() => {
    const setActiveMenu = () => {
      const locatinArray = pathname
        .split('/')
        .filter(Boolean)
        .map((item: any) => `/${item}`);
      setSelectedKeys(locatinArray);
    };
    setActiveMenu();
  }, [pathname]);

  /**
   *@description: 格式化菜单
   *@param {Array}  routes 后端获取的路由表
   * */
  const formatSiderItem = (data: any) => {
    //因为要删除hidden，为了保持原路由不变，所以进行深克隆
    const routes = func.deepClone(data);
    const customIcons: { [key: string]: any } = Icons;
    const siderMenu = routes.map((item: any, index: number) => {
      // 删除不需要在菜单里显示的路由地址
      if (item.hidden) {
        routes.splice(index, 1);
        return;
      }
      return {
        key: `/${item.path}`,
        label: item.meta.title,
        icon: item.meta.icon
          ? React.createElement(customIcons[`${item.meta.icon}`])
          : null,
        children:
          item.children && item.children.length > 0
            ? formatSiderItem(item.children)
            : null,
      };
    });
    return siderMenu;
  };

  const onClick = (values: any) => {
    const path = values.keyPath.reverse().join('');
    navigate(path);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed} className="slider">
      <div className="logo">
        <img src={logo} className="img" />
        {!collapsed && <span className="title">Pikachu-Admin</span>}
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['/home']}
        onClick={onClick}
        items={items}
        selectedKeys={selectedKeys}
      />
    </Sider>
  );
};
export default LayoutSider;
