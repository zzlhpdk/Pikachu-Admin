import { Button, Col, Form, Input, Row, Select, Card } from 'antd';
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
  const [form] = Form.useForm();
  /**
   *@description:
   *@searchData 表单查询数据
   *@searchLayout 表单布局
   *@searchButtonPosition  按钮位置，left 左边， center 中间，right（默认右边）
   *@request  请求数据接口

   * */
  const {
    searchData,
    searchButtonPosition = 'right',
    request,
    searchLayout,
  } = props;

  const onFinish = async (values: any) => {
    const newValues = func.formatDateTime(values, searchData);
    const response = await request(newValues);
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
    </>
  );
};

export default Grid;
