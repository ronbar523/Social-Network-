import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const LAST_NAME_REGEX = /^[A-Za-z\s.\(\)0-9]{1,15}$/;

const LastName = ({
  lastName,
  setLastName,
  validLastName,
  setValidLastName,
  lastNameFocus,
  setLastNameFocus,
}) => {
  useEffect(() => {
    const result = LAST_NAME_REGEX.test(lastName);
    setValidLastName(result);
  }, [lastName]);

  return (
    <>
      <div className="last-name">
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          size="small"
          sx={{
            width: "140px",
          }}
          error={!validLastName && !lastNameFocus}
          onChange={(e) => setLastName(e.target.value)}
          onFocus={() => setLastNameFocus(true)}
          onBlur={() => setLastNameFocus(false)}
          inputProps={{ maxLength: 20 }}
          helperText={"Last Name"}
        />
      </div>
    </>
  );
};

export default LastName;
