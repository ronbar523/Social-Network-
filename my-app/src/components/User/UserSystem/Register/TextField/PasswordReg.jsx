import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const PasswordReg = ({
  password,
  setPassword,
  validPassword,
  setValidPassword,
  passwordFocus,
  setPasswordFocus,
  checkPass,
  confirm,
  errConfirm,
}) => {
  
  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);

  return (
    <div className="">
      <TextField
        required
        id="outlined-required"
        label="Password"
        type={"password"}
        size="small"
        sx={{
          width: "140px",
        }}
        error={!validPassword && !passwordFocus}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => {
          setPasswordFocus(false);
          checkPass();
        }}
        inputProps={{ maxLength: 30 }}
        helperText={
          password.length === 0 || confirm.length === 0 || !validPassword
            ? "Minimum Length 6"
            : (errConfirm || confirm.length > 1) && password !== confirm
            ? "Pass Not Match"
            : "Passwords Match"
        }
      />
    </div>
  );
};

export default PasswordReg;
