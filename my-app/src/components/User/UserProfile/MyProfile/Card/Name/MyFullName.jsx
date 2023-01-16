import React from "react";

const MyFullName = ({ myProfile }) => {
  return (
    <>
      <p className="full-name">
        {myProfile.firstName} {myProfile.lastName}
      </p>
    </>
  );
};

export default MyFullName;
