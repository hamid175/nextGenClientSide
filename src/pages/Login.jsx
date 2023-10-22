import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom/dist";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import loginLogo from "../assets/LogoNextgen.png";

import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Spinner,
} from "reactstrap";
import { userLogin } from "../api-services/services";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters."),
  });
  const handleLogin = async (values) => {
    const payload = values;
    delete payload?.["password-input"];
    setLoading(true);
    try {
      const res = await userLogin(payload);
      const data = res.data;

      if (res.status === 200 && Object.values(data).length > 0) {
        localStorage.setItem("authUser", res.data.response.token);

        nav("/");
      } else {
        toast.error("User not exist!");
      }
    } catch (error) {
      // Handle any errors here
      if (error.response.status === 400) {
        toast.error("Invalid Password");
      }
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <ToastContainer />
      <div className="w-100 vh-100 d-flex ">
        <div className="w-50 vh-100 login-poster"></div>
        <div className="w-50 d-flex align-items-center justify-content-center overflow-y-auto">
          <Card className=" border-0">
            <CardBody className="p-5">
              <div className="text-center mt-2">
                <img
                  src={loginLogo}
                  width={"200px"}
                  height={"100px"}
                  alt="loginLogo"
                />
                <h5 className="company mt-4 mb-0 font-weight-bold">
                  Welcome to NextGen Surveys
                </h5>
                <p className="text-muted ">Login to access your account</p>
              </div>
              <div className="p-2 mt-4">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  enableReinitialize
                  onSubmit={(values) => handleLogin(values)}
                >
                  {({ values, errors }) => {
                    return (
                      <Form action="#">
                        <div className="mb-3">
                          <Label
                            htmlFor="email"
                            className="form-label input-label"
                          >
                            Email
                          </Label>
                          <Field
                            type="text"
                            className="form-control input-field"
                            id="email"
                            name="email"
                            placeholder="Enter username"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger error"
                          />
                        </div>

                        <div className="mb-3">
                          <Label
                            className="form-label input-label"
                            htmlFor="password"
                          >
                            Password
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Field
                              type="password"
                              className="form-control pe-5 password-input input-field"
                              placeholder="Enter password"
                              id="password"
                              name="password"
                            />
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                            <ErrorMessage
                              name="password"
                              component="div"
                              className="text-danger error"
                            />
                          </div>
                        </div>

                        <div className="mb-3 d-flex gap-1 align-items-center">
                          <input type="checkbox" />
                          <Label className="m-0 text-normal">Remember Me</Label>
                        </div>

                        <div className="mt-4">
                          {!loading ? (
                            <Button
                              className="btn primary-btn w-100"
                              type="submit"
                              // onClick={() => nav("/home")}
                            >
                              Login
                            </Button>
                          ) : (
                            <button
                              type="submit"
                              className="btn primary-btn w-100"
                              disabled
                            >
                              <Spinner
                                size="sm"
                                className="flex-shrink-0"
                              ></Spinner>
                            </button>
                          )}
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <p className="login-footer">
                Don’t have an account?
                <Link to={"/register"}>Create an account</Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
