import React from "react";
import { Link, useNavigate } from "react-router-dom/dist";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import loginLogo from "../assets/LogoNextgen.jpg";

import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
} from "reactstrap";

const Register = () => {
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

  return (
    <React.Fragment>
      <div className="w-100 vh-100 d-flex ">
        <div className="w-50 h-100 login-poster "></div>
        <div className="w-50 d-flex align-items-center justify-content-center overflow-y-auto px-0 px-md-5">
          <Card className=" border-0 w-auto">
            <CardBody className="px-xxl-5">
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
                <p className="text-muted ">Create an account to get started</p>
              </div>
              <div className="p-2 mt-4">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  enableReinitialize
                  // onSubmit={(e, values) => {

                  //   // same s hape as initial values
                  //   console.log(values);
                  // }}
                >
                  {({ values, errors }) => (
                    <Form action="#">
                      {/* Email address */}
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
                      {/* Team Code */}
                      <div className="mb-3">
                        <Label
                          htmlFor="=teamCode"
                          className="form-label input-label"
                        >
                          Team Code
                        </Label>
                        <Field
                          type="text"
                          className="form-control input-field"
                          id="=teamCode"
                          name="=teamCode"
                          placeholder="Enter username"
                        />
                        <ErrorMessage
                          name="=teamCode"
                          component="div"
                          className="text-danger error"
                        />
                      </div>

                      {/* Password Field */}
                      <div className="mb-3">
                        <Label
                          className="form-label input-label"
                          htmlFor="password-input"
                        >
                          Password
                        </Label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <Field
                            type="password"
                            className="form-control pe-5 password-input input-field"
                            placeholder="Enter password"
                            id="password-input"
                            name="password-input"
                          />
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                        <ErrorMessage
                          name="password-input"
                          component="div"
                          className="text-danger"
                        />
                      </div>
                      {/* Password Field */}
                      <div className="mb-3">
                        <Label
                          className="form-label input-label"
                          htmlFor="re-password-input"
                        >
                          Re-enter Password
                        </Label>
                        <div className="position-relative auth-pass-inputgroup mb-3">
                          <Field
                            type="password"
                            className="form-control pe-5 password-input input-field"
                            placeholder="Enter password"
                            id="re-password-input"
                            name="re-password-input"
                          />
                          <button
                            className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                            type="button"
                            id="password-addon"
                          >
                            <i className="ri-eye-fill align-middle"></i>
                          </button>
                        </div>
                        <ErrorMessage
                          name="re-password-input"
                          component="div"
                          className="text-danger"
                        />
                      </div>

                      <div className="mb-3 d-flex gap-1 ">
                        <div className="" style={{paddingTop: "1px"}}>
                        <input id="check" name="check" type="checkbox" />

                        </div>
                        <Label htmlFor="check" className="m-0 condition-text">
                          By clicking this, I agree to the{" "}
                          <span>Terms & Conditions</span>{" "}and{" "}
                          <span>Privacy Policy</span>{" "}of NextGen Surveys
                        </Label>
                      </div>

                      <div className="mt-4">
                        <Button
                          className="btn primary-btn w-100"
                          type="submit"
                          onClick={() => nav("/login")}
                        >
                          Create an Account
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
              <p className="login-footer">
                Already have an account? <Link to={"/login"}>Login</Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
