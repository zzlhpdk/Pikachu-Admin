import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import userStore from '@/store/userStore';

const Crumbs = () => {
  const { pathname } = useLocation();
  const { flatRoutes } = userStore();
  const renderBreadcrumbs = () => {
    const array = pathname.split('/').filter(Boolean);
    return array.map((item: any) => {
      return flatRoutes.map((item_: any) => {
        if (item_.key === item) {
          return (
            <Breadcrumb.Item key={item_.key}>{item_.title}</Breadcrumb.Item>
          );
        }
      });
    });
  };
  return (
    <>
      <Breadcrumb className="breadcrumb">{renderBreadcrumbs()}</Breadcrumb>
    </>
  );
};
export default Crumbs;
