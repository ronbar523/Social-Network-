import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

  const PasswordNew = ({
    password,
    setPassword,
    validPassword,
    setValidPassword,
    passwordFocus,
    setPasswordFocus,
    confirm,
  }) => {
    useEffect(() => {
      const result = PASSWORD_REGEX.test(password);
      setValidPassword(result);
    }, [password]);

    return (
      <div className="input-box1">
        <TextField
          required
          id="outlined-required"
          label="Password"
          type={"password"}
          size="small"
          sx={{
            width: "300px",
          }}
          error={
            (!validPassword && !passwordFocus) ||
            (confirm !== password && confirm.length >= password.length)
          }
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => {
            setPasswordFocus(false);
          }}
          inputProps={{ maxLength: 30 }}
          helperText={
            password.length === 0 ||
            confirm.length === 0 ||
            !validPassword ||
            confirm.length <= password.length
              ? "Minimum Length 6"
              : confirm.length >= password.length && password !== confirm
              ? "Passwords Not Match"
              : "Passwords Match"
          }
        />
      </div>
    );
  };

export default PasswordNew;
