import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";

const RegisterLink = ({ handleMenuClose }) => {
  return (
    <>
      <MenuItem onClick={handleMenuClose}>
        <Link to={`/register`} className="text-decoration-none text-dark">
          Register
        </Link>
      </MenuItem>
    </>
  );
};

export default RegisterLink;
