import FullScreen from './FullScreen';
import Collapsed from './Collapsed';
import UserInfo from './UserInfo';
import Breadcrumb from './Crumbs';
import { Layout } from 'antd';

const { Header } = Layout;

const LayoutHeader = () => {
  return (
    <Header>
      <div className="header-left">
        <Collapsed />
        <Breadcrumb />
      </div>
      <div className="header-right">
        <FullScreen />
        <UserInfo />
      </div>
    </Header>
  );
};
export default LayoutHeader;
