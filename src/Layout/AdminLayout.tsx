import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

import Headers from '../module/admin/include/Headers';
import Sidebars from '../module/admin/include/Sidebars';
import { LayoutProps } from '../models/layout';

const AdminLayout: React.FC<LayoutProps> = ({children}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebars />
      <Layout>
        <Headers />
        <Content style={{ margin: '0 16px' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;