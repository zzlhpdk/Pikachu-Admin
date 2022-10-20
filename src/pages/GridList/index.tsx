import React, { useState, useEffect } from 'react';
import { Space } from 'antd';
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
      span: 4,
    },
    wrapperCol: {
      span: 20,
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
      title: '出生年月',
      dataIndex: 'borth',
      valueType: 'datePicker',
    },
    {
      title: '在校时间',
      dataIndex: 'school',
      valueType: 'dateRange',
    },
    {
      title: '毕业时间',
      dataIndex: 'graduate',
      valueType: 'datePicker',
      picker: 'month',
    },
    {
      title: '职业',
      dataIndex: 'post',
      valueType: 'tree',
      data: treeData,
    },
    {
      title: '请假时间',
      dataIndex: 'leave',
      valueType: 'dateRange',
      showTime: true,
    },
  ];
  const columns = [
    {
      title: '序号',
      dataIndex: 'account',
      render: (text: string, record: any, index: number) => (
        <span>{index + 1}</span>
      ),
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '性别',
      dataIndex: 'sex',
    },
    {
      title: '出生年月',
      dataIndex: 'borth',
    },

    {
      title: '在校时间',
      dataIndex: 'school',
    },
    {
      title: '毕业时间',
      dataIndex: 'graduate',
    },
    {
      title: '职业',
      dataIndex: 'post',
    },
    {
      title: '请假时间',
      dataIndex: 'leave',
    },
    {
      title: '操作',
      width: '120px',
      dataIndex: 'operation',
      render: (text: string, record: any) => {
        return (
          <Space>
            <span
              style={{ cursor: 'pointer', color: '#108ee9' }}
              onClick={() => {
                handleEdit(record);
              }}
            >
              修改
            </span>
          </Space>
        );
      },
    },
  ];
  const handleEdit = () => {
    console.log(2);
  };
  return (
    <div>
      <Grid
        searchData={searchData} //表单字段
        request={gridListApi} // 列表接口
        searchLayout={searchLayout} // 表单布局
        searchButtonPosition={'center'} //  按钮位置
        columns={columns} //表头
      />
    </div>
  );
}
