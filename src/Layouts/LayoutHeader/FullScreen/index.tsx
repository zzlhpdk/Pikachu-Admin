import layoutStore from '@/store/layoutStore';
import { MenuFoldOutlined, ExpandOutlined } from '@ant-design/icons';

const FullScreen = () => {
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };
  return (
    <div onClick={toggleFullScreen}>
      <ExpandOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
    </div>
  );
};
export default FullScreen;
