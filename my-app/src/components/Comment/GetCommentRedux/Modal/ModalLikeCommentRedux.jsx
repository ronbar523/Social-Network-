import React, { useEffect } from "react";
import Close from "./Buttons/Close";
import ProfileLink from "./Buttons/ProfileLink";
import Back from "./Buttons/Back";
import Next from "./Buttons/Next";

const ModalLikeCommentRedux = ({ user, setModalLikeCommentRedux }) => {
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <>
      <div className="modal show fade model-all d-block mt-4" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <Close setModalLikeCommentRedux={setModalLikeCommentRedux} />
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

export default ModalLikeCommentRedux;
