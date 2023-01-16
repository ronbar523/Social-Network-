import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const UserProfileLink = ({ user, handleMenuClose }) => {
  return (
    <>
      <MenuItem onClick={handleMenuClose}>
        <Link
          to={`/my_profile/${user.nickName}`}
          className="text-decoration-none text-dark"
        >
          My Profile
        </Link>
      </MenuItem>
    </>
  );
};

export default UserProfileLink;
