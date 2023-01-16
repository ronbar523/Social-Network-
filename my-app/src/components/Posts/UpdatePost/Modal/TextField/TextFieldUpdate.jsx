import React from "react";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";

const TextFieldUpdate = ({ description, setDescription }) => {


  return (
    <>
      <CardContent
        sx={{ height: "120px", overflowX: "hidden", overFlowY: "visible"
      }}
      >
        <TextField
          id="filled-multiline-flexible"
          multiline
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          inputProps={{ maxLength: 2500, style: {fontSize: "14px"}}}
          sx={{
            marginLeft: "-5px",
            marginTop: "-25px",
            width: "250px",
            "& fieldset": { border: "none" },
          }}
        />
      </CardContent>
    </>
  );
};

export default TextFieldUpdate;
