import { Layout } from 'antd';
import './style.less';
import LayoutHeader from './LayoutHeader';
import LayoutContent from './LayoutContent';
import LayoutSider from './LayoutSider';

const Layouts = () => {
  const { Sider, Content } = Layout;
  return (
    <Layout className="layout">
      <LayoutSider Sider={Sider} />
      <div className="container">
        <LayoutHeader />
        <LayoutContent />
      </div>
    </Layout>
  );
};

export default Layouts;
