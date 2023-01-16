import React from "react";

const UserNickName = ({ userProfile }) => {
  return (
    <>
      <p className="nick-name">
        <b>{userProfile.nickName}</b>
      </p>
    </>
  );
};

export default UserNickName;
