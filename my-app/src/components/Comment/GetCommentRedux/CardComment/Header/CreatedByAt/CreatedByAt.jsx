import React from "react";
import { Link } from "react-router-dom";

const CreatedByAt = ({ user }) => {
  return (
    <>
      <div>
        <Link
          className=" text-decoration-none text-dark"
          to={`/my_profile/${user.nickName}`}
        >
          <p className="created-by-comment">{user.nickName}</p>
        </Link>
        <p className="created-at-comment">now</p>
      </div>
    </>
  );
};

export default CreatedByAt;
