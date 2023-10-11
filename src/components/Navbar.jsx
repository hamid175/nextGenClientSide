import React from "react";
import { TbLogout } from "react-icons/tb";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { AppContext } from "../App";
import { useContext } from "react";

const Navbar = () => {
  const data = useContext(AppContext);

  return (
    
      <div className=" py-3 px-5">
        <div className="d-flex">
          {/* admin name */}
          <div className="pe-4 border-end d-flex flex-column justify-content-start align-items-start">
            <h6 className="username m-0">Jalal Ghani</h6>
            <Input
              id="exampleSelect"
              bsSize="sm"
              width={"94px"}
              className="border-0"
              name="select"
              type="select"
            >
              <option>AB 365418</option>
              <option>GY 241658</option>
              <option>LY 741584</option>
            </Input>
          </div>
          <div className="px-4 border-end d-flex flex-column align-items-start slider-container">
            <div className="w-100 d-flex justify-content-between progress-detail">
              <p className="w-50 p-0 m-0 ">Survey Progress</p>
              <p className="p-0 m-0 color-grey-900">{data?.progress}%</p>
            </div>
            <Slider
              // value={float_val}
              step={0.5}
              min={0}
              max={100}
              value={data?.progress}
              orientation="horizontal"
              className="slider"
              // onChange={(value) => {
              //   setfloat_val(value);
              // }}
            />
          </div>
          <div className="px-4 border-end d-flex align-items-center">
            <div className="time-frame">
              <p>Time Remaining</p>
              <span>59m 59s</span>
            </div>
          </div>
          <div className="ps-4 d-flex gap-2">
            {/* add new team code */}
            <button className="new-btn">+ New Team Code</button>

            {/* logout button */}
            <Link
              to={"/login"}
              className="logout-btn d-flex align-items-center justify-content-center p-2 "
            >
              <TbLogout className="text-danger" size={"22px"} />
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
