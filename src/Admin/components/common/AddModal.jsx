import { Field } from "formik";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
} from "reactstrap";

const AddModal = ({ modal, toggle, teamCode }) => {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        
        <ModalBody>
          <div className="mb-3">
          <p className="modal-title mb-0">Add {teamCode ? "Member" : "Team"}</p>
          {teamCode &&   <span className="sub-title">{teamCode}</span>}
          </div>
          {teamCode ? (
            <div className="mb-3">
              <Label
                htmlFor="email"
                className="form-label input-label"
              >
                Email Address
              </Label>
              <Input
                type="text"
                className="form-control input-field"
                id="email"
                name="email"
                placeholder="Enter email"
              />
            </div>
          ) : (
            <div className="mb-3">
              <Label
                htmlFor="teamCode"
                className="form-label input-field"
              >Team Code</Label>
              <Input
                type="text"
                className="form-control"
                id="teamCode"
                name="teamCode"
                placeholder="Enter team code"
              />
            </div>
          )}
           <div className="d-flex justify-content-end gap-3 pt-2">
          <Button className="secondary-btn" onClick={toggle}>
            Cancel
          </Button>
          <Button color="btn primary-btn" onClick={toggle}>
            Add Member
          </Button>{" "}
        </div>
        </ModalBody>
       
      </Modal>
    </div>
  );
};

export default AddModal;
