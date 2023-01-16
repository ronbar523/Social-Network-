import React, { useState } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  getCurrentUser,
  findUserByEmail,
  newPassword,
} from "../../../services/usersServices";
import ConfirmNew from "../../../components/User/UserSystem/NewPass/TextField/ConfirmNew";
import PasswordNew from "../../../components/User/UserSystem/NewPass/TextField/PasswordNew";
import ModalEmailNotExist from "../../../components/User/UserSystem/NewPass/Modal/ModalEmailNotExist";
import ModalSecureNumWrong from "../../../components/User/UserSystem/NewPass/Modal/ModalSecureNumWrong";
import ModalExpired from "../../../components/User/UserSystem/NewPass/Modal/ModalExpired";
import ModalBlockUser from "../../../components/User/UserSystem/Login/Modal/ModalBlockUser";

const NewPass = () => {
  const user = getCurrentUser();

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(true);
  const [errConfirm, setErrConfirm] = useState(false);

  const [userBlock, setUserBlock] = useState(false);
  const [emailNotExist, setEmailNotExist] = useState(false);
  const [secureNumWrong, setSecureNumWrong] = useState(false);
  const [expiredLink, setExpiredLink] = useState(false);

  function checkPass() {
    if (password !== confirm) {
      setErrConfirm(true);
    } else {
      setErrConfirm(false);
    }
  }

  const url = window.location.href;
  const urlWordsArr = url.split("/");
  const email = urlWordsArr[4];
  const num = urlWordsArr[5];

  const searchUser = async () => {
    const theUserFound = await findUserByEmail(email);

    if (theUserFound.data[0] === undefined) {
      setEmailNotExist(true);
    } else if (theUserFound.data[0].block === true) {
      setUserBlock(true);
    } else if (
      theUserFound.data[0].randomSecureNumber === undefined ||
      theUserFound.data[0].randomSecureNumber === null
    ) {
      setExpiredLink(true);
    } else if (theUserFound.data[0].randomSecureNumber !== num) {
      setSecureNumWrong(true);
    }
  };

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
      await newPassword(email, num, user);
      toast.success(`Your password changed`);
      window.location = "/";
    } catch (err) {
      toast.error(`Something happened`);
    }
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <div className="register-box">
        <div
          className={
            emailNotExist && secureNumWrong && expiredLink
              ? "opacity-modal"
              : ""
          }
        >
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
                checkPass={checkPass}
                errConfirm={errConfirm}
                confirm={confirm}
                searchUser={searchUser}
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
                searchUser={searchUser}
              />
            </div>
            {!emailNotExist && !secureNumWrong && !expiredLink ? (
              <div>
                <Link
                  to={`/login`}
                  className="btn btn-secondary me-2 btn-reset"
                >
                  Login
                </Link>
                <button className="btn btn-primary btn-reset">Send</button>
              </div>
            ) : null}
          </form>
        </div>
        {userBlock ? <ModalBlockUser /> : null}
        {emailNotExist ? <ModalEmailNotExist /> : null}
        {secureNumWrong ? <ModalSecureNumWrong /> : null}
        {expiredLink ? <ModalExpired /> : null}
      </div>
    </>
  );
};

export default NewPass;
