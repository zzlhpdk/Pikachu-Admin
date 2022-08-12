import FullScreen from './FullScreen';
import Collapsed from './Collapsed';
import UserInfo from './UserInfo';
import Breadcrumb from './Crumbs';

const LayoutHeader = () => {
  return (
    <div className="layout-header">
      <div className="header-left">
        <Collapsed />
        <Breadcrumb />
      </div>
      <div className="header-right">
        <FullScreen />
        <UserInfo />
      </div>
    </div>
  );
};
export default LayoutHeader;
