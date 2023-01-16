import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Email = ({
  email,
  setEmail,
  validEmail,
  setValidEmail,
  emailFocus,
  setEmailFocus,
  emailExist,
  setEmailExist,
}) => {
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    setEmailExist(false);
  }, [email]);

  return (
    <>
      <div className="input-box1">
        <TextField
          required
          id="outlined-required"
          size="small"
          label="Email"
          sx={{
            width: "300px",
          }}
          error={(!validEmail && !emailFocus) || emailExist}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          helperText={
            emailExist ? "Email not existing" : "Must be an email account"
          }
        />
      </div>
    </>
  );
};

export default Email;
