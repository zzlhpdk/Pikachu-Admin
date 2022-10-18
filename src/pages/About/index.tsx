import React from 'react';
import { Input } from 'antd';
import Grid from '@/components/Grid';
export default function About() {
  const personData = [
    {
      label: '小哥哥',
      value: 'xgg',
    },
    {
      label: '小姐姐',
      value: 'xjj',
    },
  ];
  const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
    },
  ];
  const searchData = [
    {
      label: '分支机构',
      name: 'belongBranch',
    },
    {
      label: '人员选择',
      name: 'perseon',
      type: 'select',
      data: personData,
    },
    {
      label: '机构名称',
      name: 'organizationId',
      type: 'tree',
      data: treeData,
    },
    {
      label: '风险事件处置等级',
      name: 'name',
    },
  ];

  return (
    <div>
      <Grid searchData={searchData} />
    </div>
  );
}
