import { Tabs } from 'antd';
import { Outlet } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import layoutStore from '@/store/layoutStore';
import userStore from '@/store/userStore';
import { useEffect } from 'react';
const LayoutContent = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { tabPane, activePane, setTabPane, setActivePane } = layoutStore();
  const { TabPane } = Tabs;
  const { flatRoutes } = userStore();


  
  useEffect(() => {
    const findPane = () => {
      // 根据 pathname 找到扁平路由里对应的路由对象
      const route = flatRoutes.find((item: any) => item.fullpath === pathname);
      if (route === undefined) return;
      // 判断多标签里是否有当前路由
      const pane = tabPane.find(
        (item: any) => item?.fullpath === route.fullpath
      );
      if (pane === undefined) {
        setTabPane([...tabPane, route]);
      }
      setActivePane(route.fullpath);
    };
    // findPane();
  }, [pathname]);
  const onChange = (activeKey: string) => {
    navigate(activeKey);
    setActivePane(activeKey);
  };
  const onEdit: any = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      //首页不能删除
      if (targetKey === '/home') {
        return;
      }
      tabPane.forEach((item: any, index: number, items: any) => {
        if (item.fullpath === targetKey) {
          const nextTab = items[index + 1] || items[index - 1]; // 获取上一个或者下一个标签
          // 设置激活状态
          setActivePane(nextTab.fullpath);
          // 切换到上一个或者下一个标签
          navigate(nextTab.fullpath);
          // 剔除被删除的标签
          const newTabPane = tabPane.filter(
            (item: any) => item.fullpath !== targetKey
          );
          setTabPane(newTabPane);
        }
      });
    }
  };
  return (
    <Tabs
      defaultActiveKey="/home"
      activeKey={activePane}
      hideAdd
      type="editable-card"
      className="layout-tabs"
      onTabClick={onChange}
      onEdit={onEdit}
      destroyInactiveTabPane
    >
      {tabPane.map((tab: any) => {
        return (
          <TabPane
            forceRender
            className="tab-pane"
            tab={tab.title}
            key={tab.fullpath}
          >
            <Outlet />
          </TabPane>
        );
      })}
    </Tabs>
  );
};
export default LayoutContent;
