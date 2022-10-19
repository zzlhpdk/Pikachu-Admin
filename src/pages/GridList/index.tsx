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
  const searchLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
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
      dataIndex: 'sex',
      valueType: 'select',
      data: personData,
    },
    {
      title: '职业',
      dataIndex: 'post',
      valueType: 'tree',
      data: treeData,
    },
    {
      title: '毕业时间',
      dataIndex: 'time',
      valueType: 'datePicker',
      picker: 'year',
    },
    {
      title: '出生年月',
      dataIndex: 'borth',
      valueType: 'datePicker',
    },
    {
      title: '星座月份',
      dataIndex: 'star',
      valueType: 'datePicker',
      picker: 'month',
    },
    {
      title: '工作时间',
      dataIndex: 'work',
      valueType: 'dateRange',
      picker: 'year',
    },
    {
      title: '读书时间',
      dataIndex: 'school',
      valueType: 'dateRange',
      showTime: true,
    },
  ];

  return (
    <div>
      <Grid
        searchData={searchData} //表单字段
        request={gridListApi} // 列表接口
        searchLayout={searchLayout} // 表单布局
        searchButtonPosition={'center'} //  按钮位置
      />
    </div>
  );
}
