import React, { useState } from "react";
import { Button, Input, Label, Modal, ModalBody, Spinner } from "reactstrap";
import { addNewTeamApi } from "../api-services/services";
import { toast } from "react-toastify";

const AddNewTeam = ({toggle, modal, loading, setLoading, setNewTeam}) => {

    const [input, setInput] = useState(null);


    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleAdd = async () =>{
        setLoading(true);
        try {
            const teamId = input;
            const res  = await addNewTeamApi(teamId);
            if(res.status === 201 && Object.values(res?.data)?.length > 0){
                setNewTeam(res?.data?.teamJoined);
                toast.info(res.message);
                toggle();
            } else{
                toast.error(res.message);
            } 

        } catch (error) {
            console.log('Error:', error);
        } finally {
            setLoading(false)
        }
    }


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <div className="mb-3">
            <p className="modal-title mb-0">
              Add New Team
            </p>
          </div>
          
            <div className="mb-3">
              <Label htmlFor="teamCode" className="form-label input-field">
                Team Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="teamCode"
                name="teamCode"
                onChange={(e) => handleInput(e)}
                placeholder="Enter team code"
              />
            </div>
          
          <div className="d-flex justify-content-end gap-3 pt-2">
            <Button className="secondary-btn" onClick={toggle}>
              Cancel
            </Button>
            {!loading ? (
              <Button
                color="btn primary-btn"
                disabled={!input ? true : false}
                onClick={handleAdd}
              >
                Add Team
              </Button>
            ) : (
              <button type="su  bmit" className="btn primary-btn" disabled>
                <Spinner size="sm" className="flex-shrink-0"></Spinner>
              </button>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddNewTeam;
