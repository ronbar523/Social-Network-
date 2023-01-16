import React from "react";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";

const ShareCount = () => {
  return (
    <>
      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          marginTop: "15px",
          marginLeft: "5px",
          borderColor: "primary.main",
        }}
      >
        <ShareIcon sx={{ fontSize: "25px" }}></ShareIcon>
      </IconButton>
    </>
  );
};

export default ShareCount;
