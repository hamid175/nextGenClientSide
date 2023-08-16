import React, { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Row, Spinner } from "reactstrap";
import DataTable from "react-data-table-component";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const TeamsTable = ({ data, toggle, toggleTeamListModal }) => {
  const [loading, setLoading] = useState(false);
 

  const columns = [
    {
      name: <span className="table-title">Team Code</span>,
      selector: (row) => (row?.teamCode ? row?.teamCode : "N/A"),
    },
    {
      name: <span className="table-title">Total Members</span>,
      selector: (row) => (row?.teamCode ? row?.totalMembers : "N/A"),
    },
    {
      name: <span className="table-title">Surveys Completed</span>,
      selector: (row) => (row?.teamCode ? row?.completedSurveys : "N/A"),
    },
    {
      name: <span className="table-title">Pending</span>,

      selector: (row) => (row?.teamCode ? row?.pendingSurvey : "N/A"),
    },
    {
      name: <span className="table-title text-end w-100">Action</span>,
      cell: (id) => {
        return (
          <Link
            to={"#"}
            onClick={() => toggleTeamListModal()}
            className=" w-100 text-end pe-2 cursor-pointer"
            style={{color: "#8e8b8b"}}
          >
            <AiFillEye size={'16px'} />
          </Link>
        );
      },
      // selector: row =>
    },
  ];

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card className="border-0 mt-2 bg-white">
          <CardHeader className="bg-white">
            <Row className="g-4 align-items-center">
                <div className="w-100 d-flex justify-content-between">
                  <h4 className="mb-0 py-3 table-header">Available Teams</h4>
                  <div className="d-flex align-items-center">
                  <Button
                    className="btn border-0 success1-btn"
                    type="button"
                    onClick={() => toggle()}
                  >
                    Add Team
                  </Button>
                  </div>
                </div>
            </Row>
          </CardHeader>
          <CardBody>
            {!loading ? (
              data && <DataTable columns={columns} data={data} pagination />
            ) : (
              <div className="">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <Spinner color="primary" className="me-2" />
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default TeamsTable;
