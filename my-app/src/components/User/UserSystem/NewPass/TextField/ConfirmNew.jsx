import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;


const ConfirmNew = ({
  password,
  confirm,
  setConfirm,
  validConfirm,
  setValidConfirm,
  confirmFocus,
  setConfirmFocus,
  validPassword,
  checkPass,
  errConfirm,
  searchUser,
}) => {
  useEffect(() => {
    const result = PASSWORD_REGEX.test(confirm);
    setValidConfirm(result);
    checkPass();
  }, [confirm]);

  return (
    <div className="input-box1">
      <TextField
        required
        id="outlined-required"
        label="Confirm"
        size="small"
        type={"password"}
        sx={{
          width: "300px",
        }}
        error={
          (!validConfirm && !confirmFocus) ||
          (confirm !== password && confirm.length >= password.length)
        }
        onChange={(e) => setConfirm(e.target.value)}
        onFocus={() => setConfirmFocus(true)}
        onBlur={() => {
          setConfirmFocus(false);
        }}
        onClick={() => searchUser()}
        inputProps={{ maxLength: 30 }}
        helperText={
          password.length === 0 || confirm.length === 0 || !validPassword
            ? "Confirm Password"
            : (errConfirm || confirm.length > 1) && password !== confirm
            ? "Passwords Not Match"
            : "Passwords Match"
        }
      />
    </div>
  );
};
 
export default ConfirmNew;