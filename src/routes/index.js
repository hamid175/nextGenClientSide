import { nonAuthProtectedRoutes, authProtectedRoutes } from "./allRoutes";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getUserTeamsApi, submitSurvey } from "../api-services/services";
export const AppContext = createContext();


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
              element={<AuthLayout path={route?.path}>{route?.component}</AuthLayout>}
            />
          ))}
        </Routes>
    </>
  );
};

export default Index;
