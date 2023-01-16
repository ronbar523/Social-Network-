import React, { useState, useEffect } from "react";
import { postLikeStore } from "../../../../store/PostLike";
import Main from "./ModalLike/Main/Main";
import Next from "./ModalLike/Buttons/Next";
import Back from "./ModalLike/Buttons/Back";
import Close from "./ModalLike/Buttons/Close";


const ModalLike = ({ user, setModalLike }) => {

  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(true);  
  const [showArr, setShowArr] = useState(postLikeStore.likes[postLikeStore.x]);
 
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [])

  useEffect(() => {
    if (
      (postLikeStore.countLikes < 11 && !postLikeStore.userLike) ||
      (postLikeStore.userLike && postLikeStore.countLikes <= 10)
    ) {
      setDisableNext(true);
    }
  }, [])
  
  return (
    <>
      <div className="modal show fade model-all d-block mt-4" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <Close setModalLike={setModalLike} />
            </div>
            <div className="modal-like-body">
              {showArr.map((item) => {
                return <Main user={user} item={item} key={item?._id} />;
              })}
            </div>
            <div className="modal-footer">
              <Back
                setShowArr={setShowArr}
                disableBack={disableBack}
                setDisableBack={setDisableBack}
                setDisableNext={setDisableNext}
              />
              <Next
                user={user}
                setShowArr={setShowArr}
                disableNext={disableNext}
                setDisableNext={setDisableNext}
                setDisableBack={setDisableBack}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default ModalLike;