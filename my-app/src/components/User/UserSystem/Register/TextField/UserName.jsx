import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const USER_REGEX = /^[A-Za-z\s.\(\)0-9]{4,20}$/;

const UserName = ({
  userName,
  setUserName,
  validUserName,
  setValidUserName,
  userNameFocus,
  setUserNameFocus,
  userNameExist,
  setUserNameExist,
}) => {
  
  useEffect(() => {
    const result = USER_REGEX.test(userName);
    setValidUserName(result);
    setUserNameExist(false);
  }, [userName]);

  return (
    <>
      <div>
        <TextField
          required
          id="outlined-required"
          size="small"
          label="User Name"
          sx={{
            width: "140px",
          }}
          error={(!validUserName && !userNameFocus) || userNameExist}
          onChange={(e) => setUserName(e.target.value)}
          onFocus={() => setUserNameFocus(true)}
          onBlur={() => setUserNameFocus(false)}
          helperText={
            !userNameExist ? "Choose nick name" : "Nick name it's existing"
          }
          inputProps={{ maxLength: 20 }}
        />
      </div>
    </>
  );
};

export default UserName;
