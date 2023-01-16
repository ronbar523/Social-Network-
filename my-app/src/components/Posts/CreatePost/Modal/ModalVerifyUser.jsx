import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { sendVerifyMailAgain } from "../../../../services/usersServices";

const ModalVerifyUser = ({ setModalCreatePost }) => {
  

  const handleClick = useCallback(async () => {
    try {
      await sendVerifyMailAgain();
      toast.success(`Success`);
      setModalCreatePost(false);
    } catch {
      toast.error("something happened");
    }
  })

  return (
    <div className="modal show fade model-all d-block" tabIndex="-1">
      <div className="modal-dialog model-border model-block">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="px-3">Peti</h4>
            <button
              className="btn-close"
              onClick={() => setModalCreatePost(false)}
            ></button>
          </div>
          <div className="modal-body">
            <h5 className=" py-4 text-center model-text">
              You need to verify your user for publish post.
            </h5>
          </div>

          <div className="modal-footer">
            <button className="btn btn-primary" onClick={() => handleClick()}>
              Resend Verify Mail
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setModalCreatePost(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalVerifyUser;
