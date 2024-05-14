import React, { useState } from 'react';
import { Form, Input, Row, Col, Typography } from 'antd';
const { Paragraph } = Typography;
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

interface CustomizedFormProps {
  onChange: (fields: FieldData[]) => void;
  fields: FieldData[];
}

const CustomizedForm: React.FC<CustomizedFormProps> = ({ onChange, fields }) => (
  <Form
    name="global_state"
    layout="vertical"
    fields={fields}
    onFieldsChange={(_, allFields) => onChange(allFields)}
  >
    <Form.Item
      name="username"
      label="Username"
      rules={[{ required: true, message: 'Username is required!' }]}
    >
      <Input placeholder='Enter Username' size="large" />
    </Form.Item>

    <Form.Item
      name="password"
      label="Password"
      rules={[{ required: true, message: 'Password is required!' }]}
    >
      <Input.Password placeholder='Enter Password' size="large" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
    </Form.Item>

  </Form>
);

const AdminLogin: React.FC = () => {
  const [fields, setFields] = useState<FieldData[]>([{ name: ['username'], value: 'Ant Design' }]);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <Row>
      <Col span={8} offset={8}>
        <CustomizedForm
          fields={fields}
          onChange={(newFields) => {
            setFields(newFields);
          }}
        />
        {/* <Paragraph style={{ maxWidth: 440, marginTop: 24 }}>
          <pre style={{ border: 'none' }}>{JSON.stringify(fields, null, 2)}</pre>
        </Paragraph> */}
      </Col>
    </Row>
  );
};

export default AdminLogin;