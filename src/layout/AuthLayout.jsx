import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";

const AuthLayout = ({ children }) => {
  const [authToken, setAuthToken] = useState(true);

  if (!authToken) {
    return <Navigate to={"/"} />;
  }

  return (
    <React.Fragment>
      <div className="d-flex w-100">
        
        <div className="col-12 ">
          <Navbar />
          <Wrapper>{children}</Wrapper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AuthLayout;
