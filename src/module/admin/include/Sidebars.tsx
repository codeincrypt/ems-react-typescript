import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

import logo from "../../../assets/images/white-logo.png";
import { adminSidebarItem } from '../../../config/sidebar';

const Sidebars: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 50, width: '100%', margin: 10 }}>
        <Link to="/admin">
          <img src={logo} style={{ height: 50 }} alt="logo" />
        </Link>
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        mode={'inline'}
        theme={'dark'}
        items={adminSidebarItem}
      />
    </Sider>
  );
};

export default Sidebars;