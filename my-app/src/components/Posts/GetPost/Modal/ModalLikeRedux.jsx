import React, { useEffect } from "react";
import Close from "./ModelLikeReduxButtons/Close";
import ProfileLink from "./ModelLikeReduxButtons/ProfileLink";
import Back from "./ModelLikeReduxButtons/Back";
import Next from "./ModelLikeReduxButtons/Next";

const ModalLikeRedux = ({ setModalLikeRedux, user }) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal show fade model-all d-block mt-4" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <Close setModalLikeRedux={setModalLikeRedux} />
            </div>

            <div className="modal-like-body">
              <ProfileLink user={user} />
            </div>

            <div className="modal-footer">
              <Back />
              <Next />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalLikeRedux;
