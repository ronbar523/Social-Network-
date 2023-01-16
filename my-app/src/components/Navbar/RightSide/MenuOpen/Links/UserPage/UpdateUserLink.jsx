import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";


const UpdateUserLink = ({ handleMenuClose }) => {
  return (
    <MenuItem onClick={handleMenuClose}>
      <Link to={`/update_user_info`} className="text-decoration-none text-dark">
        My account
      </Link>
    </MenuItem>
  );
};
 
export default UpdateUserLink;