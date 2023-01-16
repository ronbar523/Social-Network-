import React from "react";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";


const Edit = ({ setModalUpdateRedux }) => {
  return (
    <>
      <MenuItem
        onClick={() => {
          setModalUpdateRedux(true);
        }}
      >
        <EditIcon sx={{ marginRight: "10px", fontSize: "22px" }} />
        Edit
      </MenuItem>
    </>
  );
};
 
export default Edit;