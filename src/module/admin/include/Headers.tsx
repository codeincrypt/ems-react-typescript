import React from 'react';
import { Col, Flex, Layout, Menu, Row, theme } from 'antd';
import { MenuItem } from '../../../models/interface';
const { Header } = Layout;
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';

const adminHeader: MenuItem[] = [
  {
    key: '1',
    icon: <UserOutlined />,
    label: ''
  },
  {
    key: '2',
    icon: <LogoutOutlined />,
    label: ''
  }
]

const Headers: React.FC = () => {
  // const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  return (
    <>
      <Header
      // style={{
      //   position: 'sticky',
      //   top: 0,
      //   zIndex: 1,
      //   width: '100%',
      //   display: 'flex',
      //   alignItems: 'center',
      // }}
      >
        <Row justify="center">
          <Col span={12}>
          </Col>
          <Col span={12}>
            <Flex gap="middle" align="end" vertical>
              <Menu
                theme="dark"
                mode="horizontal"
                items={adminHeader}
                style={{ flex: 1, minWidth: 0 }}
              />
            </Flex>
          </Col>
        </Row>
      </Header >
    </>
  );
};

export default Headers;