import { ExclamationCircleOutlined } from '@ant-design/icons';
import userStore from '@/store/userStore';
import { Dropdown, Menu, Modal, message } from 'antd';
import { useNavigate } from 'react-router-dom';
const UserInfo = () => {
  const { confirm } = Modal;
  const navigate = useNavigate();
  const {
    userInfo: { avatar, nickname },
  } = userStore();

  const onClick = (value: any) => {
    if (value.key === '1') {
      confirm({
        title: '提示',
        icon: <ExclamationCircleOutlined />,
        content: '是否确认退出',
        okText: '确认',
        cancelText: '取消',
        onOk() {
          navigate('/login');
          message.success('您已退出成功');
        },
        onCancel() {
          return false;
        },
      });
    }
  };
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          key: '1',
          label: '退出登录',
        },
      ]}
    />
  );
  return (
    <div className="user-info">
      <Dropdown overlay={menu} arrow overlayStyle={{ width: '150px' }}>
        <div className="user-dropdown">
          <img src={avatar} alt="" />
          <div className="user-name">{nickname}</div>
        </div>
      </Dropdown>
    </div>
  );
};
export default UserInfo;
