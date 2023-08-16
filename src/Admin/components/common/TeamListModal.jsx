import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import { Link } from "react-router-dom";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const TeamListModal = ({ modal, toggle, teamCode, openAddModal }) => {
  const dummyList = [
    {
      email: "sarah.williams@school.edu",
    },
    {
      email: "jessica.smith@example.com",
    },
    {
      email: "david.jones@company.net",
    },
    {
      email: "michael.brown@blog.org",
    },
    {
      email: "emma.wilson@travel.co.uk",
    },
  ];

  return (
    <Modal isOpen={modal} toggle={toggle}>
      {/* <ModalHeader toggle={toggle} className="border-0"></ModalHeader> */}
      <ModalBody>
        <div  className="d-flex justify-content-between mb-2">
          <div>
            <p className="modal-title">Members</p>
            {teamCode && <span className="sub-title">{teamCode}</span>}
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3">
            <LuCopy className="" style={{color: "rgba(10, 179, 156, 1)", fontSize: "18px", cursor:"pointer"}} />
            <Button color="btn success-btn" onClick={openAddModal}>
              Add Member
            </Button>{" "}
          </div>
        </div>
        <div className="list">
          {dummyList?.map((item, idx) => (
            <div
              key={idx}
              className={`d-flex align-items-center justify-content-between list-item ${
                idx === dummyList?.length - 1 ? "border-0" : ""
              }`}
            >
              <p className="p-0 m-0 input-label">{item?.email}</p>

              <button className="">
                <RiDeleteBin5Line />
              </button>
            </div>
          ))}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default TeamListModal;
