import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu_1_1 = () => {
  const navigate = useNavigate();
  const pushMenu1_2 = () => {
    navigate('/menu/menu-1/menu-1-2');
  };

  return (
    <>
      <div>我是菜单1-1</div>
      <Button type="primary" onClick={pushMenu1_2}>
        点我去菜单1-2
      </Button>
      <div>↑ ↑ ↑ ↑ ↑（注：菜单1-2是未在菜单栏显示的按钮页面）</div>
    </>
  );
};
export default Menu_1_1;
