import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";


const AlreadySubmitted = () => {

  return (
    <div className="d-flex align-items-center justify-content-center">

    <div
      style={{ width: "450px" }}
      className=" d-flex align-items-center justify-content-center px-5 py-5 mt-5 bg-white rounded-2"
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center
      "
      >
        <div className="py-4 d-flex justify-content-center">
          <AiFillCheckCircle
            className=""
            color="rgba(10, 179, 156, 1)"
            size={"70px"}
          />
        </div>
        <h1 className="fs-4">Already Submitted!</h1>
        <p className="mb-4">Survey is already submitted.</p>
      </div>
    </div>
    </div>
  );
};

export default AlreadySubmitted;
