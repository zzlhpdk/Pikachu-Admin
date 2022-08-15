import layoutStore from '@/store/layoutStore';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Collapsed = () => {
  const { collapsed, setCollapsed } = layoutStore();
  return (
    <div className="collapsed" onClick={() => setCollapsed(!collapsed)}>
      {collapsed ? (
        <MenuUnfoldOutlined style={{ fontSize: '24px' }} />
      ) : (
        <MenuFoldOutlined style={{ fontSize: '24px' }} />
      )}
    </div>
  );
};
export default Collapsed;
