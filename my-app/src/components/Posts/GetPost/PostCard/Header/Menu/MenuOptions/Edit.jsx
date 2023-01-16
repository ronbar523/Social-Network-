import React from "react";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";

const Edit = ({ addModalPost }) => {
  return (
    <>
      <MenuItem
        onClick={() => {       
          addModalPost();
        }}
      >
        <EditIcon
          sx={{
            marginRight: "10px",
            fontSize: "24px",
          }}
        />
        Edit
      </MenuItem>
    </>
  );
};

export default Edit;
