import React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const ButtonUpdate = ({ updatePost }) => {
  return (
    <>
      <CardContent className="btn-update-post">
        <Button
          onClick={() => updatePost()}
          variant="contained"
          className="btn-update-post"
          sx={{
            width: 100,
          }}
        >
          Update
        </Button>
      </CardContent>
    </>
  );
};

export default ButtonUpdate;
