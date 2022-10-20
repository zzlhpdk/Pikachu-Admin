import React, { useState, useEffect } from 'react';

export default function About() {
  useEffect(() => {
    console.log(222);
  }, []);
  return (
    <div>
      <h1>关于</h1>
    </div>
  );
}
