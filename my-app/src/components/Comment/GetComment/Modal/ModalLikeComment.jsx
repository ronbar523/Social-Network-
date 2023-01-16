import React, { useState, useEffect } from "react";
import { commentLikeStore } from "../../../../store/CommentLike";
import Back from "./ModalLikeComment/Buttons/Back";
import Close from "./ModalLikeComment/Buttons/Close";
import Next from "./ModalLikeComment/Buttons/Next";
import Main from "./ModalLikeComment/Main/Main";

const ModalLikeComment = ({ user, setModalLikeComment }) => {

  const [disableNext, setDisableNext] = useState(false);
  const [disableBack, setDisableBack] = useState(true);
  const [showArr, setShowArr] = useState(
    commentLikeStore.likes[commentLikeStore.x]
  );
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (
      (commentLikeStore.countLikes < 11 && !commentLikeStore.userLike) ||
      (commentLikeStore.userLike && commentLikeStore.countLikes <= 10)
    ) {
      setDisableNext(true);
    }
    
  }, []);


  return (
    <>
      {/* {!isLoading ? ( */}
      <div className="modal show fade model-all d-block mt-4" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <Close setModalLikeComment={setModalLikeComment} />
            </div>
            <div className="modal-like-body">
              {showArr.map((item) => {
                return <Main user={user} item={item} key={item._id} />;
              })}
            </div>
            <div className="modal-footer">
              <Back
                setShowArr={setShowArr}
                disableBack={disableBack}
                setDisableBack={setDisableBack}
                setDisableNext={setDisableNext}
                // setIsLoading={setIsLoading}
              />
              <Next
                user={user}
                setShowArr={setShowArr}
                disableNext={disableNext}
                setDisableNext={setDisableNext}
                setDisableBack={setDisableBack}
                // setIsLoading={setIsLoading}
              />
            </div>
          </div>
        </div>
      </div>
      {/* ) : null} */}
    </>
  );
};

export default ModalLikeComment;
