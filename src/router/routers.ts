import ForgotPassword from "../auth/ForgotPassword";
import Login from "../auth/Login";
import Home from "../module/home/Home";

import AdminDashboard from "../module/admin/AdminDashboard";
import AdminLogin from "../auth/AdminLogin";

export const AuthRouter = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
    exact: true,
  }
];

export const EmpRouter = [
  {
    path: '/employee/login',
    component: Login,
    exact: true,
  }
];

export const HomeRouter = [
  {
    path: '/',
    component: Home,
    exact: true,
  }
];

export const AdminAuthRouter = [
  {
    path: '/admin/login',
    component: AdminLogin,
    exact: true,
  }
];

export const AdminRouter = [
  {
    path: '/admin',
    component: AdminDashboard,
    exact: true,
  },
  {
    path: '/admin/home',
    component: AdminDashboard,
    exact: true,
  }
];