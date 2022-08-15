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
      <Content className="container">
        <LayoutHeader />
        <LayoutContent />
      </Content>
    </Layout>
  );
};

export default Layouts;
