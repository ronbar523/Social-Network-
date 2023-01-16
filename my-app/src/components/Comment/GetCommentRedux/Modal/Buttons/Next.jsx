import React from "react";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Next = () => {
  return (
    <>
      <Button
        sx={{
          height: 35,
          marginRight: 1,
        }}
        disabled={true}
        variant="outlined"
      >
        <NavigateNextIcon />
      </Button>
    </>
  );
};

export default Next;
