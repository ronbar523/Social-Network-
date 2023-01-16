import React, { useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { getCurrentUser, loginUser } from "../../../services/usersServices";
import Email from "../../../components/User/UserSystem/Login/TextField/Email";
import PasswordLogin from "../../../components/User/UserSystem/Login/TextField/PasswordLogin";
import ModalBlockUser from "../../../components/User/UserSystem/Login/Modal/ModalBlockUser";

const Login = () => {
  const user = getCurrentUser();

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const [emailExist, setEmailExist] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [passwordWrong, setPasswordWrong] = useState(false);

  const [blockUser, setBlockUser] = useState(false);

  const handleOnSubmit = async (ev) => {
    if (ev) {
      ev.preventDefault();
    }

    try {
      const user = {
        email: email,
        password: password,
      };

      await loginUser(user);
      window.location = "/";
    } catch (err) {
      if (err.response.data.err === "The Email Not Existing") {
        setEmailExist(true);
        setPasswordWrong(false);
      }

      if (
        err.response.data.err === "Wrong Password" ||
        (err.response.data.err !== "The Email Not Existing" &&
          err.response.data.err !== "Your User Is Block")
      ) {
        setPasswordWrong(true);
      }

      if (err.response.data.err === "Your User Is Block") {
        setBlockUser(true);
      }
    }
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <div>
        <div
          className={blockUser ? "register-box opacity-modal" : "register-box"}
        >
          <img
            className="logo"
            src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
          ></img>
          <p className="title">Sign In</p>
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

            <PasswordLogin
              password={password}
              setPassword={setPassword}
              validPassword={validPassword}
              setValidPassword={setValidPassword}
              passwordFocus={passwordFocus}
              setPasswordFocus={setPasswordFocus}
              passwordWrong={passwordWrong}
            />

            <Link to={`/reset`} className="btn btn-secondary me-2 btn-reg">
              Forget
            </Link>
            <button className="btn btn-primary btn-reg">Login</button>
          </form>
        </div>
        {blockUser ? <ModalBlockUser /> : null}
      </div>
    </>
  );
};

export default Login;
