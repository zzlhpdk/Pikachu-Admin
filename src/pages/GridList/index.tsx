import React from 'react';
import { Input } from 'antd';
import Grid from '@/components/Grid';
import { gridListApi } from '@/service/grid';

export default function GridList() {
  const personData = [
    {
      title: '男',
      value: 1,
    },
    {
      title: '女',
      value: 0,
    },
  ];
  const treeData = [
    {
      title: '前端开发',
      value: '0-0',
      children: [
        {
          title: '小程序',
          value: '0-0-1',
        },
        {
          title: '后管系统',
          value: '0-0-2',
        },
      ],
    },
    {
      title: '后端开发',
      value: '0-1',
      children: [
        {
          title: 'JAVA开发',
          value: '0-1-1',
        },
        {
          title: 'PHP开发',
          value: '0-1-2',
        },
      ],
    },
  ];
  const searchData = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'perseon',
      type: 'select',
      data: personData,
    },
    {
      title: '职业',
      dataIndex: 'post',
      type: 'tree',
      data: treeData,
    },
    {
      title: '毕业时间',
      dataIndex: 'time',
      type: 'datePicker',
    },
  ];

  return (
    <div>
      <Grid searchData={searchData} request={gridListApi} />
    </div>
  );
}
