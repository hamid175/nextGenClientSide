import React, { useEffect, useState } from "react";
import { TbLogout } from "react-icons/tb";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { useContext } from "react";
import { calculateTimeRemaining, formatTime } from "../utils/conversions";
import { AppContext } from "../layout/AuthLayout";

const Navbar = () => {
  const data = useContext(AppContext);
  const { setSelectedTeam, selectedTeam } = useContext(AppContext);

  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(selectedTeam?.deadline)
  );
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  useEffect(() => {
    if (timerIntervalId) {
      clearInterval(timerIntervalId); // Clear the previous interval
    }
    let timerInterval;

    if (selectedTeam?.deadline) {
      timerInterval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining(selectedTeam?.deadline));
      }, 1000);

      setTimerIntervalId(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [selectedTeam]);



  const handleLogout = () => {
    localStorage.clear();
  }

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
            onChange={(e) => {
              const val = JSON.parse(e.target.value);
              setSelectedTeam(val);
            }}
          >
            {data?.userTeams?.map((item, idx) => (
              <option value={JSON.stringify(item)}>{item?.code}</option>
            ))}
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
            <span>{!timeRemaining ? "N/A" : formatTime(timeRemaining)}</span>
          </div>
        </div>
        <div className="ps-4 d-flex gap-2">
          {/* add new team code */}
          <button className="new-btn" onClick={data.addToggle}>
            + New Team Code
          </button>

          {/* logout button */}
          <Link
            to={"/login"}
            onClick={handleLogout}
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
