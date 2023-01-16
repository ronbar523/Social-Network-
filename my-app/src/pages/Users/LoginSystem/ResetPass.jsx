import React, { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import {
  getCurrentUser,
  findUserByEmail,
  restPassword,
} from "../../../services/usersServices";

import Email from "../../../components/User/UserSystem/ResetPass/TextField/Email";
import ModelSendEmail from "../../../components/User/UserSystem/ResetPass/Modal/ModelSendEmail";
import ModelBlockUser from "../../../components/User/UserSystem/Login/Modal/ModalBlockUser";

const ResetPass = () => {
  const user = getCurrentUser();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);

  const [emailExist, setEmailExist] = useState(false);
  const [blockUser, setBlockUser] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);

  const handleOnSubmit = async (ev) => {
    if (ev) {
      ev.preventDefault();
    }

    if (!validEmail) {
      return;
    }

    const user = {
      email: email,
    };

    const theUserFound = await findUserByEmail(user.email);

    try {
      if (theUserFound.data[0] === undefined) {
        setEmailExist(true);
      } else if (theUserFound.data[0].block === true) {
        setBlockUser(true);
      } else {
        await restPassword(user);
        setSendEmail(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <div>
        <div
          className={
            sendEmail || blockUser
              ? "register-box opacity-modal"
              : "register-box"
          }
        >
          <img
            className="logo"
            src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
          ></img>
          <p className="title">Reset Password</p>
          <form onSubmit={handleOnSubmit}>
            <Email
              email={email}
              setEmail={setEmail}
              emailFocus={emailFocus}
              setEmailFocus={setEmailFocus}
              validEmail={validEmail}
              setValidEmail={setValidEmail}
              emailExist={emailExist}
              setEmailExist={setEmailExist}
            />

            <Link to={`/login`} className="btn btn-secondary me-2 btn-reset">
              Login
            </Link>
            <button className="btn btn-primary btn-reset">Reset</button>
          </form>
        </div>
        {sendEmail ? <ModelSendEmail /> : null}
        {blockUser ? <ModelBlockUser /> : null}
      </div>
    </>
  );
};

export default ResetPass;
