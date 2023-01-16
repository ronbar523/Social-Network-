import React from "react";

const UserFullName = ({ userProfile }) => {
  return (
    <>
      <p className="full-name">
        {userProfile.firstName} {userProfile.lastName}
      </p>
    </>
  );
};

export default UserFullName;
