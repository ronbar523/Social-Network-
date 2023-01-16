import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const LogoutLink = ({ handleMenuClose }) => {
  return (
    <>
      <MenuItem onClick={handleMenuClose}>
        <Link to={`/logout`} className="text-decoration-none text-dark">
          Logout
        </Link>
      </MenuItem>
    </>
  );
};
 
export default LogoutLink;