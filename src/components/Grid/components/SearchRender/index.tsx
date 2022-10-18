import moment from 'moment';
import type { ColProps } from 'antd/lib/grid/col';
import { Input, Form, DatePicker, TreeSelect, Col, Select } from 'antd';

const gridLayout = {
  xxl: { span: 6 },
  xl: { span: 8 },
  lg: { span: 12 },
  md: { span: 24 },
};

const SearchRender = (data: any, searchGridLayout: ColProps = gridLayout) => {
  return (data || []).map((field: any) => {
    const basicAttr = {
      label: field.title,
      name: field.dataIndex,
    };
    switch (field.type) {
      case 'dateTimePicker':
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <DatePicker.RangePicker
                allowEmpty={field.allowEmpty || [false, false]}
                allowClear
                showTime={field.showtime}
                disabled={field.disabled}
                style={{ width: '100%' }}
                ranges={{
                  今日: [moment().startOf('day'), moment().endOf('day')],
                  最近7日: [moment().subtract(7, 'd'), moment()],
                  最近30日: [moment().subtract(30, 'days'), moment()],
                  最近整月: [
                    moment().subtract(1, 'months').startOf('month'),
                    moment().subtract(1, 'months').endOf('month'),
                  ],
                }}
              />
            </Form.Item>
          </Col>
        );
      case 'datePicker':
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <DatePicker
                placeholder="请选择日期"
                picker={field.picker ? field.picker : undefined}
                style={{ width: '100%' }}
              />
            </Form.Item>
          </Col>
        );
      case 'tree':
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <TreeSelect
                treeData={field.data}
                disabled={field.disabled}
                allowClear
                showSearch
                treeNodeFilterProp="title"
              />
            </Form.Item>
          </Col>
        );
      case 'multipleTree':
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <TreeSelect
                treeData={field.data}
                disabled={field.disabled}
                allowClear
                showSearch
                treeNodeFilterProp="title"
                multiple
              />
            </Form.Item>
          </Col>
        );
      case 'select':
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <Select
                allowClear
                mode={field.mode ? field.mode : undefined}
                showSearch={field.showSearch ? field.showSearch : false}
                filterOption={field.filterOption ? field.filterOption : false}
                optionFilterProp={
                  field.optionFilterProp ? field.optionFilterProp : undefined
                }
                listHeight={400}
              >
                {(field.data || []).map((option: any) => {
                  return (
                    <Select.Option
                      value={option.value}
                      key={option.value}
                      lable={option.title || option.label}
                    >
                      {option.title || option.label}
                    </Select.Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        );
      default:
        return (
          <Col {...searchGridLayout} key={field.dataIndex}>
            <Form.Item {...basicAttr}>
              <Input disabled={field.disabled} />
            </Form.Item>
          </Col>
        );
    }
  });
};

export default SearchRender;
