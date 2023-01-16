import React from "react";
import MenuItem from "@mui/material/MenuItem";
import DeleteIcon from "@mui/icons-material/Delete";

const Delete = ({ addDeleteModal }) => {
  return (
    <>
      <MenuItem
        onClick={() => {
          addDeleteModal();
        }}
      >
        <DeleteIcon
          sx={{
            marginRight: "10px",
            fontSize: "24px",
          }}
        />
        Delete
      </MenuItem>
    </>
  );
};

export default Delete;
