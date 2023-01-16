
import React from "react";
import TextField from "@mui/material/TextField";


const Phone = ({
  setPhone
}) => {

  return (
    <div className="phone">
      <TextField
        id="outlined"
        label="Phone"
        size="small"
        type={"number"}
        sx={{
          width: "140px",
        }}
        onChange={(e) => setPhone(e.target.value)}
        inputProps={{ maxLength: 15 }}
        helperText={"Phone Number"}
      />
    </div>
  );
};
 
export default Phone;