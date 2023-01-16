import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";

const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%&]).{6,30}$/;

const ConfirmPass = ({
  password,
  confirm,
  setConfirm,
  validConfirm,
  setValidConfirm,
  confirmFocus,
  setConfirmFocus,
  checkPass,
}) => {
  useEffect(() => {
    const result = PASSWORD_REGEX.test(confirm);
    setValidConfirm(result);
    checkPass();
  }, [confirm]);

  return (
    <div className="confirm">
      <TextField
        required
        id="outlined-required"
        label="Confirm"
        size="small"
        type={"password"}
        sx={{
          width: "140px",
        }}
        error={(!validConfirm && !confirmFocus) || confirm !== password}
        onChange={(e) => setConfirm(e.target.value)}
        onFocus={() => setConfirmFocus(true)}
        onBlur={() => {
          setConfirmFocus(false);
          checkPass();
        }}
        inputProps={{ maxLength: 30 }}
      />
    </div>
  );
};

export default ConfirmPass;
