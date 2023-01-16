import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const PasswordLogin = ({
  password,
  setPassword,
  validPassword,
  setValidPassword,
  passwordFocus,
  setPasswordFocus,
  passwordWrong,
}) => {

  useEffect(() => {
    const result = PASSWORD_REGEX.test(password);
    setValidPassword(result);
  }, [password]);


  return (
    <div className="input-password">
      <TextField
        required
        id="outlined-required"
        label="Password"
        type={"password"}
        size="small"
        sx={{
          width: "300px",
        }}
        error={passwordWrong || (!validPassword && !passwordFocus)}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => {
          setPasswordFocus(false);
        }}
        inputProps={{ maxLength: 30 }}
        helperText={passwordWrong ? "Wrong password" : "Your password"}
      />
    </div>
  );
};

export default PasswordLogin;
