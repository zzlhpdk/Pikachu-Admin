import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Card } from 'antd';
import React, { useState } from 'react';
import SearchRender from './components/SearchRender';
import moment from 'moment';
import { log } from 'console';

const { Option } = Select;

const Grid = (props: any) => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  /**
   *@description:
   *@searchData 表单查询数据
   *@searchButtonPosition  按钮位置，left 左边， center 中间，right（默认右边）
   *@tableDataApi  请求数据接口

   * */
  const { searchData, searchButtonPosition = 'right' } = props;

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    // console.log(moment(values.time).format('YYYY-MM-DD'))
    console.log(values.time._isAMomentObject)

  };

  return (
    <Card bordered={false}>
      <Form
        form={form}
        name="serarchForm"
        className="serarchForm"
        onFinish={onFinish}
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
  );
};

export default Grid;
