import React, { useState } from "react";
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
  Spinner,
} from "reactstrap";
import { userSignup } from "../api-services/services";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address.")
      .required("Email is required."),
    // teamCode: Yup.string().required("Team Code is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters."),
      confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match') // Check if it matches the 'password' field
      .required("Password confirmation is required.")
      .min(8, "Password must be at least 8 characters."),
  });

  const handleSignup = async (values) => {
    const payload = values;
    setLoading(true);
    try {
      const res = await userSignup(payload);
      if (res.status === 201 ) {
        toast.success(res.message);
        nav("/login");
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      if(error.response.request.status === 400){
        toast.error('User already exist!');
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
                  onSubmit={(values) => {
                    handleSignup(values);
                  }}
                >
                  {({ values, errors }) => {
                  
                    return (
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
                            htmlFor="teamCode"
                            className="form-label input-label"
                          >
                            Team Code
                          </Label>
                          <Field
                            type="text"
                            className="form-control input-field"
                            id="teamCode"
                            name="teamCode"
                            placeholder="Enter username"
                          />
                          <ErrorMessage
                            name="teamCode"
                            component="div"
                            className="text-danger error"
                          />
                        </div>

                        {/* Password Field */}
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
                          </div>
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger error"
                          />
                        </div>
                        {/* Password Field */}
                        <div className="mb-3">
                          <Label
                            className="form-label input-label"
                            htmlFor="confirm_password"
                          >
                            Re-enter Password
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Field
                              type="password"
                              className="form-control pe-5 password-input input-field"
                              placeholder="Enter password"
                              id="confirm_password"
                              name="confirm_password"
                            />
                            <ErrorMessage
                              name="confirm_password"
                              component="div"
                              className="text-danger error"
                            />
                          </div>
                        </div>

                        <div className="mb-3 d-flex gap-1 ">
                          <div className="" style={{ paddingTop: "1px" }}>
                            <input id="check" name="check" type="checkbox" />
                          </div>
                          <Label htmlFor="check" className="m-0 condition-text">
                            By clicking this, I agree to the{" "}
                            <span>Terms & Conditions</span> and{" "}
                            <span>Privacy Policy</span> of NextGen Surveys
                          </Label>
                        </div>

                        <div className="mt-4">
                          {!loading ? (
                            <Button
                              className="btn primary-btn w-100"
                              type="submit"
                            >
                              Create an Account
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
