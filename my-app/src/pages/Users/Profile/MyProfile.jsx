import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Navigate } from "react-router";
import {
  getCurrentUser,
} from "../../../services/usersServices";

import Navbar from "../../../components/Navbar/Navbar";
import CardMyProfile from "../../../components/User/UserProfile/MyProfile/Card/CardMyProfile";
import MyPosts from "../../../components/User/UserProfile/MyProfile/Post/MyPosts";



const MyProfile = () => {

  const user = getCurrentUser()

  const url = window.location.href;
  const urlWordsArr = url.split("/");

  const nickName = useMemo(() => {
    return urlWordsArr[urlWordsArr.length - 1];
  }, []);

  const [isNotYourUser, setIsNotYourUser] = useState(false)

  useEffect(() => {
    if(user?.nickName !== nickName) {
      setIsNotYourUser(true);
    }
  }, [nickName])

  const [closeModal, setCloseModal] = useState(false)

  return (
    <>
      {isNotYourUser && <Navigate to="/" />}
      <header>
        <Navbar closeModal={closeModal} setCloseModal={setCloseModal}/>
      </header>
      <main>
        <CardMyProfile user={user} />
        <MyPosts nickName={nickName} />
      </main>
    </>
  );
};

export default MyProfile;
