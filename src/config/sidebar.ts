import type { GetProp, MenuProps } from 'antd';
type MenuItem = GetProp<MenuProps, 'items'>[number];
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export const adminSidebarItem: MenuItem[] = [
  {
    key: '1',
    icon: '',
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: '',
    label: 'Timesheet',
  },
  {
    key: '3',
    label: 'Employee',
    icon: '',
    children: [
      { key: '31', label: 'Employee' },
      { key: '32', label: 'Option 4' },
    ],
  },
  {
    key: '4',
    label: 'Payroll',
    icon: '',
    children: [
      { key: '401', label: 'Overview', icon:'h' },
      { key: '402', label: 'Salary Revision' },
      { key: '403', label: 'Reimbursement' },
      { key: '403', label: 'LOP Days' },
      { key: '403', label: 'Release Salary' },
    ],
  },
  {
    key: '6',
    icon: '',
    label: 'Leaves',
  },
  {
    key: '6',
    icon: '',
    label: 'Assets Management',
  },
  {
    key: '6',
    icon: '',
    label: 'Reports',
  },
  {
    key: '5',
    icon: '',
    label: 'Tasks',
  },
]