import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

import loginLogo from "../../../assets/loginLogo.png";

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

const Login = () => {
  const nav = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Invalid email address.")
    .required("Email is required."),
    password: Yup.string().required("Password is required.").min(8, "Password must be at least 8 characters."),
  });

  
  return (
    <React.Fragment>
      <Container className="vh-100 w-100 d-flex align-items-center">
        <Row className="justify-content-center w-100">
          <Col md={8} lg={4} xl={4}>
            <Card className="mt-4 border-0">
              <CardBody className="p-5">
                <div className="text-center mt-2">
                  <img
                    src={loginLogo}
                    width={"86px"}
                    height={"64px"}
                    alt="loginLogo"
                  />
                  <h5 className="company mt-4 mb-0 font-weight-bold">
                    NextGen Surveys
                  </h5>
                  <p className="text-muted ">Login to access your account</p>
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
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label input-label">
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

                        <div className="mt-4">
                          <Button
                            className="btn primary-btn w-100"
                            type="submit"
                            onClick={() => nav("/admin/dashboard")}
                          >
                            Login 
                          </Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Login;
