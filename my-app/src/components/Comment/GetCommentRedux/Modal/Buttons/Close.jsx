import React from "react";

const Close = ({ setModalLikeCommentRedux }) => {
    
  const closeModal = () => {
    setModalLikeCommentRedux(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()}></button>
    </>
  );
};

export default Close;
