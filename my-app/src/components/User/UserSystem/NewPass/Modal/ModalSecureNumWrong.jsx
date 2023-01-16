import React from "react";
import { Link } from "react-router-dom";

const ModalSecureNumWrong = () => {
  


  return (
    <div className="modal show fade model-all d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block ">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="px-2">Peti</h4>
            <Link className="btn-close" to={"/"}></Link>
          </div>
          <div className="modal-body">
            <h5 className=" py-4 text-center model-text">
              The link it's wrong
            </h5>
          </div>

          <div className="modal-footer">
            <Link className="btn btn-secondary" to={"/"}>
              Close
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSecureNumWrong;
