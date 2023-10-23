import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { AiFillCheckCircle } from "react-icons/ai";

const SurveyCompleted = () => {

    const nav = useNavigate();


  return (
    <div style={{width: '450px'}} className=" d-flex align-items-center justify-content-center px-5 py-5 mt-5 bg-white rounded-2">
      <div
        className="d-flex flex-column align-items-center justify-content-center
      "
    >
        <div className="py-4 d-flex justify-content-center">
          <AiFillCheckCircle className="" color="rgba(10, 179, 156, 1)" size={"70px"} />
        </div>
        <h1 className="fs-4">Well Done !</h1>
        <p className="mb-4">Survey Submitted Successfully.</p>
        <Button onClick={() => nav('/')} color="btn primary-btn">Back To Home</Button>
      </div>
    </div>
  );
};

export default SurveyCompleted;
