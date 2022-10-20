import hello from '@/assets/images/home/hello.png';
import React, { useState, useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    console.log('首页');
  }, []);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <img src={hello} alt="" style={{ width: '55%' }} />
    </div>
  );
};
export default Home;
