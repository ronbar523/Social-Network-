import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUser, deleteMyUser } from "../../../../../services/usersServices";

const ModalDelete = () => {
  const user = getCurrentUser();


  const handleDelete = async () => {
    try {
      await deleteMyUser(user.email);
      toast.success(`Your user deleted`);
      window.location = "/";
    } catch (err) {
      toast.error(`Something happened`);
    }
  };


  return (
    <>
      <div
        className="modal show fade model-all d-block"
        tabIndex="-1"
      >
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="px-3">Peti</h4>
              <Link className="btn-close" to={"/"}></Link>
            </div>
            <div className="modal-body">
              <h5 className="py-4 text-center model-text">
                Are you sure you want to{" "}
                <b className="text-danger">Delete Your User?</b>
              </h5>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger d-inline"
                data-bs-dismiss="modal"
                onClick={() => handleDelete()}
              >
                Delete
              </button>
              <Link className="btn btn-secondary" to={"/"}>
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
