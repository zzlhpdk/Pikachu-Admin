import { useState, useEffect } from 'react';
import { Button, Col, Form, Row, Card, Table } from 'antd';
import SearchRender from './components/SearchRender';
import { func } from '@/utils';

const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 18,
  },
};

const Grid = (props: any) => {
  const [dataSource, setDataSource] = useState([]); //列表数据
  const [submitData, setSubmitData] = useState({
    current: 1,
    size: 10,
  });
  const [form] = Form.useForm();
  const {
    searchData, //表单查询数据
    searchButtonPosition = 'right', //按钮位置，left 左边， center 中间，right（默认右边）
    request, //请求数据接口
    searchLayout, //表单布局
    columns, //Table表头
    rowKey, //Table唯一ID
  } = props;

  useEffect(() => {
    const getDataSource = async () => {
      console.log(2);
      
      // const response = await request(submitData);
      // const { data } = response;
      // setDataSource(data.record);
    };
    getDataSource();
  }, []);

  // 查询
  const onFinish = async (values: any) => {
    const newValues = func.formatDateTime(values, searchData);
    setSubmitData({
      ...newValues,
      current: 1,
      size: 10,
    });
  };

  return (
    <>
      <Card bordered={false}>
        <Form
          form={form}
          name="serarchForm"
          className="serarchForm"
          onFinish={onFinish}
          {...(searchLayout || formItemLayout)}
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            {SearchRender(searchData)}
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: searchButtonPosition }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                style={{ margin: '0 8px' }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                重置
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
      <div style={{ marginBottom: '24px' }}></div>
      <Card bordered={false}>
        <Table
          dataSource={dataSource}
          rowKey={rowKey || 'id'}
          columns={columns}
        />
      </Card>
    </>
  );
};

export default Grid;
