import React from "react";
import { nonAuthProtectedRoutes, authProtectedRoutes } from "./allRoutes";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";

const Index = () => {
  return (
    <>
      <Routes>
        {nonAuthProtectedRoutes?.map((route, idx) => (
          <Route key={idx} path={route?.path} element={route.component} />
        ))}
      </Routes>

      {/* auth protected routes */}
      <Routes>
        {authProtectedRoutes?.map((route, idx) => (
          <Route
            key={idx}
            path={route?.path}
            element={<AuthLayout>{route?.component}</AuthLayout>}
          />
        ))}
      </Routes>
    </>
  );
};

export default Index;
