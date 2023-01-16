import React from "react";
import { commentLikeStore } from "../../../../../../store/CommentLike";

const Close = ({ setModalLikeComment }) => {
    
  const closeModal = () => {
    setModalLikeComment(false);
    document.body.style.overflow = "visible";
    commentLikeStore.likes = [];
    commentLikeStore.commentId = "";
    commentLikeStore.countLikes = 0;
    commentLikeStore.count = 10;
    commentLikeStore.x = 0;
    commentLikeStore.newFollow = [];
    commentLikeStore.unFollow = [];
    commentLikeStore.userLike = false;
    commentLikeStore.flag = false;
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()}></button>
    </>
  );
};

export default Close;
