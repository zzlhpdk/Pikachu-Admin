import { Layout } from 'antd';
import './style.less';
import LayoutHeader from './LayoutHeader';
import LayoutTabs from './LayoutTabs';
import LayoutSider from './LayoutSider';
import LayoutContent from './LayoutContent';

const Layouts = () => {
  return (
    <Layout className="layout">
      <LayoutSider />
      <Layout className="container">
        <LayoutHeader />
        <LayoutTabs />
        <LayoutContent />
      </Layout>
    </Layout>
  );
};

export default Layouts;
