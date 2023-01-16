import React, { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";

import {
  getCurrentUser,
  findUserById,
  updateUserDetails,
} from "../../../services/usersServices";

import { updateUserDetailsInPost } from "../../../services/postServices";

import Phone from "../../../components/User/UserDetails/UpdateDetails/TextField/Phone";
import FirstName from "../../../components/User/UserDetails/UpdateDetails/TextField/FirstName";
import LastName from "../../../components/User/UserDetails/UpdateDetails/TextField/LastName";
import Date from "../../../components/User/UserDetails/UpdateDetails/TextField/Date";
import Gender from "../../../components/User/UserDetails/UpdateDetails/TextField/Gender";
import ModelSuccess from "../../../components/User/UserDetails/UpdateDetails/Modal/ModelSuccess";

const UpdateDetails = () => {
  const user = getCurrentUser();

  const [nickName, setNickName] = useState("");
  const [userInfo, setUserInfo] = useState("")

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(true);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(true);

  const [fullName, setFullName] = useState("");

  const [phone, setPhone] = useState("");

  const [gender, setGender] = useState("");
  const [validGender, setValidGender] = useState(false);
  const [genderFocus, setGenderFocus] = useState(true);

  const [date, setDate] = useState("");
  const [validDate, setValidDate] = useState(false);
  const [dateFocus, setDateFocus] = useState(true);
  const [young, setYoung] = useState(false);
  const [old, setOld] = useState(false);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  useEffect(() => {
    const fetchData = async () => {
      if(user) {
          await findUserById(user?._id).then((res) => {
          setFirstName(res.data.firstName);
          setLastName(res.data.lastName);
          setPhone(res.data.phone);
          setGender(res.data.gender);
          setDate(res.data.dateOfBirth);
          setUserInfo(res.data);
          setNickName(res.data.nickName)
        });
      }
    };

    fetchData().catch(console.error);
  }, []);


  const handleOnSubmit = async (ev) => {
    if (phone === "") {
      setPhone(" - ");
    }

    if (ev) {
      ev.preventDefault();
    }

    if (young || old) {
      return;
    }

    try {
      const user = {
        firstName: firstName,
        lastName: lastName,
        fullName: fullName,
        phone: phone,
        dateOfBirth: date,
        gender: gender,
      };

      if(userInfo.firstName !== firstName || userInfo.lastName !== lastName){
        const UserDetailsInPost = {
          createdByName: nickName + " (" + firstName + " " + lastName + ")",
        };
        await updateUserDetailsInPost(UserDetailsInPost);
      }

      await updateUserDetails(user);
      setSuccess(true);
    } catch (err) {
      toast.error(`Something happened`);
    }
  };

  return (
    <>
      {!user && <Navigate to="/" />}
      <div>
        <div
          className={success ? "register-box opacity-modal" : "register-box"}
        >
          <img
            className="logo"
            src="https://i.imagesup.co/images2/55998d96407049438c45b5a0c79de5833b8faaf1.png"
          ></img>
          <p className="title">Update Your User Info</p>
          {!success ? (
            <form onSubmit={handleOnSubmit}>
              <Phone phone={phone} setPhone={setPhone} />
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

              <button className="btn btn-primary btn-update">Send</button>
            </form>
          ) : null}
        </div>
        {success ? <ModelSuccess /> : null}
      </div>
    </>
  );
};

export default UpdateDetails;
