import React from "react";
import { postLikeStore } from "../../../../../../store/PostLike";

const Close = ({ setModalLike }) => {
    
  const closeModal = () => {
    setModalLike(false);
    document.body.style.overflow = "visible";
    postLikeStore.likes = [];
    postLikeStore.postId = "";
    postLikeStore.countLikes = 0;
    postLikeStore.count = 10;
    postLikeStore.x = 0;
    postLikeStore.newFollow = [];
    postLikeStore.unFollow = [];
    postLikeStore.userLike = false;
    postLikeStore.flag = false;
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()}></button>
    </>
  );
};

export default Close;
