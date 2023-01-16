import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  crateNewUser,
  getCurrentUser,
  loginUser,
} from "../../../services/usersServices";

import Email from "../../../components/User/UserSystem/Register/TextField/Email";
import ConfirmPass from "../../../components/User/UserSystem/Register/TextField/ConfirmPass";
import PasswordReg from "../../../components/User/UserSystem/Register/TextField/PasswordReg";
import FirstName from "../../../components/User/UserSystem/Register/TextField/FirstName";
import LastName from "../../../components/User/UserSystem/Register/TextField/LastName";
import UserName from "../../../components/User/UserSystem/Register/TextField/UserName";
import Phone from "../../../components/User/UserSystem/Register/TextField/Phone";
import Date from "../../../components/User/UserSystem/Register/TextField/Date";
import Gender from "../../../components/User/UserSystem/Register/TextField/Gender";

const Register2 = () => {
  const user = getCurrentUser();

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(true);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(true);

  const [fullName, setFullName] = useState("");

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userNameFocus, setUserNameFocus] = useState(true);
  const [userNameExist, setUserNameExist] = useState(false);

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(true);
  const [emailExist, setEmailExist] = useState(false);

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(true);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(true);
  const [young, setYoung] = useState(false);
  const [old, setOld] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(true);

  const [confirm, setConfirm] = useState("");
  const [validConfirm, setValidConfirm] = useState(false);
  const [confirmFocus, setConfirmFocus] = useState(true);
  const [errConfirm, setErrConfirm] = useState(false);

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  console.log(fullName)

  const checkPass = () => {
    if (password !== confirm) {
      setErrConfirm(true);
    } else {
      setErrConfirm(false);
    }
  };

  const handleOnSubmit = async (ev) => {
    if (phone === "") {
      setPhone(" - ");
    }

    if (ev) {
      ev.preventDefault();
    }

    if (!validPassword || password !== confirm) {
      return;
    }

    if (young || old) {
      return;
    }

    if (userName.length < 3) {
      return;
    }

    try {
      const user = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        nickName: userName,
        phone: phone,
        dateOfBirth: date,
        gender: gender,
        email: email,
        password: password,
      };
      await crateNewUser(user);

      delete user.firstName;
      delete user.lastName;
      delete user.fullName;
      delete user.nickName;
      delete user.phone;
      delete user.dateOfBirth;
      delete user.gender;
      await loginUser(user);
      toast.success(`Success`);
      window.location = "/";
    } catch (err) {
      if (err.response.data.err === "Email it's exist") {
        setEmailExist(true);
      }

      if (err.response.data.err === "User Name it's exist") {
        setUserNameExist(true);
      }
    }
  };

  return (
    <>
      {user && <Navigate to="/" />}
      <div className="register-box">
        <img
          className="logo"
          src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
        ></img>
        <p className="title">Create Your Peti Account</p>

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

          <div className="input-box2">
            <FirstName
              firstName={firstName}
              setFirstName={setFirstName}
              validFirstName={validFirstName}
              setValidFirstName={setValidFirstName}
              firstNameFocus={firstNameFocus}
              setFirstNameFocus={setFirstNameFocus}
            />
            <LastName
              lastName={lastName}
              setLastName={setLastName}
              validLastName={validLastName}
              setValidLastName={setValidLastName}
              lastNameFocus={lastNameFocus}
              setLastNameFocus={setLastNameFocus}
            />
          </div>

          <div className="input-box2">
            <UserName
              userName={userName}
              setUserName={setUserName}
              validUserName={validUserName}
              setValidUserName={setValidUserName}
              userNameFocus={userNameFocus}
              setUserNameFocus={setUserNameFocus}
              userNameExist={userNameExist}
              setUserNameExist={setUserNameExist}
            />

            <Phone setPhone={setPhone} />
          </div>
          <div className="input-box2">
            <Date
              date={date}
              setDate={setDate}
              validDate={validDate}
              setValidDate={setValidDate}
              dateFocus={dateFocus}
              setDateFocus={setDateFocus}
              young={young}
              setYoung={setYoung}
              old={old}
              setOld={setOld}
            />
            <Gender
              gender={gender}
              setGender={setGender}
              validGender={validGender}
              setValidGender={setValidGender}
              genderFocus={genderFocus}
              setGenderFocus={setGenderFocus}
            />
          </div>

          <div className="input-box2">
            <PasswordReg
              password={password}
              setPassword={setPassword}
              validPassword={validPassword}
              setValidPassword={setValidPassword}
              passwordFocus={passwordFocus}
              setPasswordFocus={setPasswordFocus}
              checkPass={checkPass}
              errConfirm={errConfirm}
              confirm={confirm}
            />
            <ConfirmPass
              password={password}
              confirm={confirm}
              setConfirm={setConfirm}
              validConfirm={validConfirm}
              setValidConfirm={setValidConfirm}
              confirmFocus={confirmFocus}
              setConfirmFocus={setConfirmFocus}
              checkPass={checkPass}
            />
          </div>

          <Link to={`/login`} className="btn btn-secondary me-2 btn-reg">
            Login
          </Link>
          <button className="btn btn-primary btn-reg">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Register2;
