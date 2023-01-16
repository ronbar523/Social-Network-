
import React from "react";
import TextField from "@mui/material/TextField";


const Phone = ({
  phone,
  setPhone
}) => {

  return (
    <div className="input-box1">
      <TextField
        id="outlined"
        label="Phone Number"
        size="small"
        type={"number"}
        value={phone || ""}
        sx={{
          width: "300px",
        }}
        onChange={(e) => setPhone(e.target.value)}
        inputProps={{ maxLength: 15 }}
        helperText={"Phone Number"}
      />
    </div>
  );
};
 
export default Phone;