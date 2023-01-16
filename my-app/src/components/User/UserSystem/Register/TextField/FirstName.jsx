import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const FIRST_NAME_REGEX = /^[A-Za-z\s.\(\)0-9]{1,15}$/;

const FirstName = ({
  firstName,
  setFirstName,
  validFirstName,
  setValidFirstName,
  firstNameFocus,
  setFirstNameFocus,
}) => {
  useEffect(() => {
    const result = FIRST_NAME_REGEX.test(firstName);
    setValidFirstName(result);
  }, [firstName]);

  return (
    <div>
      <TextField
        required
        id="outlined-required"
        label="First Name"
        size="small"
        sx={{
          width: "140px",
        }}
        error={!validFirstName && !firstNameFocus}
        onChange={(e) => setFirstName(e.target.value)}
        onFocus={() => setFirstNameFocus(true)}
        onBlur={() => setFirstNameFocus(false)}
        helperText={"First Name"}
        inputProps={{ maxLength: 20 }}
      />
    </div>
  );
};

export default FirstName;
