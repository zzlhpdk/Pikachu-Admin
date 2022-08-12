import React from 'react';
import userStore from '@/store/userStore';

const Menu_2_1 = () => {
  const { token, userInfo } = userStore();
  return <div style={{ border: '1px solid red' }}>菜单2-1</div>;
};
export default Menu_2_1;
