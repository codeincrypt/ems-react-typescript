import { Breadcrumb } from 'antd';

const AdminDashboard = () => {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <h1>Dashboard - Admin</h1>
    </>
  )
}

export default AdminDashboard
