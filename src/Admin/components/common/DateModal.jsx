import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import {
  Button,
  Col,
  Label,
  Modal,
  ModalBody,
} from "reactstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const DateModal = ({ modal, toggle }) => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        {/* <ModalHeader toggle={toggle}>
        </ModalHeader> */}
        <ModalBody className="border-0">
          <p className="modal-title">Date and Time</p>
          <Col lg={12} className="my-2">
            <div>
              <Label className="form-label input-label">Select Date</Label>

              <Flatpickr
                className="form-control"
                options={{
                  minDate: "today",
                  dateFormat: "d M, Y",
                }}
              
              />
            </div>
          </Col>
          <Col lg={12}>
            <div className="my-4">
              <Label className="form-label  input-label">Select Time</Label>
              <Flatpickr
                className="form-control"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                }}
              />
            </div>
          </Col>

          <div className="d-flex justify-content-end gap-3">
            <Button className="secondary-btn" onClick={toggle}>
              Cancel
            </Button>
            <Button color="btn primary-btn" onClick={toggle}>
              Update
            </Button>{" "}
          </div>
        </ModalBody>
        
      </Modal>
    </div>
  );
};

export default DateModal;
