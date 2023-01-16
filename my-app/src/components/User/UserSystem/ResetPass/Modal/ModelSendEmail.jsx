import React from "react";
import { Link } from "react-router-dom";


const ModelSendEmail = () => {
  

  return (
    <div className="modal show fade model-all d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="px-3">Peti</h4>
            <Link className="btn-close" to={"/"}></Link>
          </div>
          <div className="modal-body">
            <h5 className="py-4 text-center model-text">
              We sent you link you email for reset password
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

export default ModelSendEmail;
