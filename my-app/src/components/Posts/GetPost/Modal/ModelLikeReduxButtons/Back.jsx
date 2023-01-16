import React from "react";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Back = () => {
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
        <NavigateBeforeIcon />
      </Button>
    </>
  );
};

export default Back;
