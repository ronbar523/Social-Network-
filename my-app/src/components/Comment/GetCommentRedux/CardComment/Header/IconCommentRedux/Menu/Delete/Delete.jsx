import React from "react";
import MenuItem from "@mui/material/MenuItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";


const Delete = ({ addDeleteModal }) => {

  return (
    <>
      <MenuItem
        onClick={() => {
          addDeleteModal()
        }}
      >
        <DeleteOutlineIcon sx={{ marginRight: "10px", fontSize: "22px" }} />
        Delete
      </MenuItem>
    </>
  );
};

export default Delete;
