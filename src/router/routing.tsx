import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import { AdminAuthRouter, AdminRouter, AuthRouter, EmpRouter, HomeRouter } from "./routers";

import EmpLayout from "../Layout/EmpLayout";
import HomeLayout from "../Layout/HomeLayout";
import AdminLayout from "../Layout/AdminLayout";
import AdminAuthLayout from "../Layout/AdminAuthLayout";

const Navigation = () => {
  return (
    <>
      <Routes>
        {EmpRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <EmpLayout>
                <item.component />
              </EmpLayout>
            }
          />
        ))}

        {AuthRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <AuthLayout>
                <item.component />
              </AuthLayout>
            }
          />
        ))}

        {HomeRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <HomeLayout>
                <item.component />
              </HomeLayout>
            }
          />
        ))}

        {AdminAuthRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <AdminAuthLayout>
                <item.component />
              </AdminAuthLayout>
            }
          />
        ))}

        {AdminRouter.map((item, ind) => (
          <Route
            exact={item.exact}
            path={item.path}
            key={ind}
            element={
              <AdminLayout>
                <item.component />
              </AdminLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;