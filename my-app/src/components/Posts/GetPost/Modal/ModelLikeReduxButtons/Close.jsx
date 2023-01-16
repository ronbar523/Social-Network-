import React from "react";

const Close = ({ setModalLikeRedux }) => {
  
  const closeModal = () => {
    setModalLikeRedux(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <button className="btn-close" onClick={() => closeModal()}></button>
    </>
  );
};

export default Close;
