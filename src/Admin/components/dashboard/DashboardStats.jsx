import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import usersIcon from "../../../assets/users.png";
import userIcon from "../../../assets/user.png";
import scheduleIcon from "../../../assets/schedule.png";
import FeatherIcon from "feather-icons-react";

const DashboardStats = ({toggleDateModal}) => {
  const totalStats = [
    {
      lable: "Total Teams",
      value: 45,
      icon: usersIcon
    },
    {
      lable: "Total Users",
      value: 447,
      icon: userIcon
    },
    {
      lable: "Completed Surveys",
      value: 225,
      icon: scheduleIcon
    },
  ];

  return (
    <Col xl={12}>
      <div className="d-flex flex-column h-100">
        <Row>
          {totalStats.map((stat, key) => (
            <Col xl={3} md={6} key={key}>
              <Card className="stat-card overflow-hidden mb-3 border-0 rounded-lg">
                <CardBody>
                  <div className="d-flex align-items-center">
                    <div className="flex-grow-1 overflow-hidden">
                      <p className="card-title title-dark text-truncate mb-3">
                        {" "}
                        {stat.lable}
                      </p>
                      <h5 className="card-value value-dark mb-0">
                        <span className="counter-value" data-target="36894">
                          {stat.value}
                        </span>
                      </h5>
                    </div>
                    <div className="flex-shrink-0">
                      <img src={stat?.icon} alt="" />
                      {/* <FeatherIcon icon="users" className="text-warning" /> */}
                 
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
          <Col xl={3} md={6}>
            <Card className="time-card overflow-hidden mb-3 border-0 rounded-lg">
              <CardBody>
                <div className="d-flex align-items-center">
                  <div className="flex-grow-1 overflow-hidden">
                    <div className="d-flex justify-content-between">
                    <p className="card-title title-light text-truncate mb-3">
                      {" "}
                      Time Remaining
                    </p>
                    <button className="bg-white border-0 time-btn" onClick={toggleDateModal}>Update Time</button>
                    </div>

                    <h5 className="card-value value-light mb-0">
                      <span className="counter-value" data-target="36894">
                        5 Days
                      </span>
                    </h5>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default DashboardStats;
