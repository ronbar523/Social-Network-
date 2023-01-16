import React, { useState, useCallback } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getCurrentUser,
  updatePassword,
} from "../../../services/usersServices";
import PasswordNew from "../../../components/User/UserDetails/ChangePassword/TextField/PasswordNew";
import ConfirmNew from "../../../components/User/UserDetails/ChangePassword/TextField/ConfirmNew";

const NewPass = () => {
  const user = getCurrentUser();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(true);
  const [errConfirm, setErrConfirm] = useState(false);

  const checkPass = useCallback(() => {
    if (password !== confirm) {
      setErrConfirm(true);
    } else {
      setErrConfirm(false);
    }
  }, [setErrConfirm]);


  const handleOnSubmit = async (ev) => {
    if (ev) {
      ev.preventDefault();
    }

    if (!validPassword || password !== confirm) {
      return;
    }

    const user = {
      password: password,
    };

    try {
      await updatePassword(user);
      toast.success(`your password changed`);
      window.location = "/";
    } catch (err) {
      toast.error(`your password changed`);
    }
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <div className="register-box">
        <div>
          <form onSubmit={handleOnSubmit}>
            <img
              className="logo"
              src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
            ></img>
            <p className="title">New Password</p>
            <div className="input-box1">
              <PasswordNew
                password={password}
                setPassword={setPassword}
                validPassword={validPassword}
                setValidPassword={setValidPassword}
                passwordFocus={passwordFocus}
                setPasswordFocus={setPasswordFocus}
                errConfirm={errConfirm}
                confirm={confirm}
              />
            </div>
            <div className="input-box2">
              <ConfirmNew
                password={password}
                confirm={confirm}
                setConfirm={setConfirm}
                errConfirm={errConfirm}
                validConfirm={validConfirm}
                validPassword={validPassword}
                setValidConfirm={setValidConfirm}
                confirmFocus={confirmFocus}
                setConfirmFocus={setConfirmFocus}
                checkPass={checkPass}
              />
            </div>
            <div>
              <Link to={`/login`} className="btn btn-secondary me-2 btn-reset">
                Login
              </Link>
              <button className="btn btn-primary btn-reset">Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPass;
