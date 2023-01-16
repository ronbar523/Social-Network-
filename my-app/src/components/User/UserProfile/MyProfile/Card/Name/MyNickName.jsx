import React from "react";

const MyNickName = ({ myProfile }) => {
  return (
    <>
      <p className="nick-name">
        <b>{myProfile.nickName}</b>
      </p>
    </>
  );
};

export default MyNickName;
