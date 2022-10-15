import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { Space, Switch, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useState } from 'react';
import userStore from '@/store/userStore';

const Menus = () => {
  const {
    userInfo: { routes },
  } = userStore();
  const navigate = useNavigate();
  const [checkStrictly, setCheckStrictly] = useState(false);
  const pushMenu1_2 = () => {
    navigate('/menu/menu-1/menu-1-2');
  };
  interface DataType {
    key: React.ReactNode;
    name: string;
    age: number;
    address: string;
    children?: DataType[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: '名称',
      dataIndex: 'title',
      key: 'title',
      render: (text: String, record: any) => {
        return record.meta.title;
      },
    },
    {
      title: '路径',
      dataIndex: 'path',
      key: 'path',
    },
  ];
  const rowSelection: TableRowSelection<DataType> = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <>
      <Table
        columns={columns}
        rowKey="path"
        // rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={routes}
      />
    </>
  );
};
export default Menus;
