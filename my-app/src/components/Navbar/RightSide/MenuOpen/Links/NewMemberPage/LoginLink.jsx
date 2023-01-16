import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const LoginLink = ({ handleMenuClose }) => {
  return (
    <>
      <MenuItem onClick={handleMenuClose}>
        <Link to={`/login`} className="text-decoration-none text-dark">
          Login
        </Link>
      </MenuItem>
    </>
  );
};

export default LoginLink;
