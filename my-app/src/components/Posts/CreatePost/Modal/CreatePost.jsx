import React, { useState, useEffect } from "react";
import { findUserById } from "../../../../services/usersServices";
import CardCreatePost from "../Card/CardCreatePost";
import ModalCreate from "./ModalCreate";
import ModalVerifyUser from "./ModalVerifyUser";

const CreatePost = ({
  user,
  modelCreatePost,
  setModalCreatePost,
  verifyUser,
  setVerifyUser,
  setIsLoading,
  isLoading,
  keyNumber,
  setKeyNumber,
}) => {
  const [createdByName, setCreatedByName] = useState("");
  const [media, setMedia] = useState("");

  const [userAccount, setUserAccount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        setUserAccount(true);
        await findUserById(user?._id).then((res) => {
          setVerifyUser(res.data.verify);
          setMedia(res.data.photo);
          setCreatedByName(
            res.data.nickName +
              " (" +
              res.data.firstName +
              " " +
              res.data.lastName +
              ")"
          );
        });
      }
    };
    fetchData().catch();
  }, []);

  return (
    <>
      <div className="box-create-post">
        {!modelCreatePost && userAccount ? (
          <CardCreatePost
            media={media}
            createdByName={createdByName}
            setModalCreatePost={setModalCreatePost}
          />
        ) : modelCreatePost && verifyUser && userAccount ? (
          <ModalCreate
            user={user}
            media={media}
            createdByName={createdByName}
            setModalCreatePost={setModalCreatePost}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            keyNumber={keyNumber}
            setKeyNumber={setKeyNumber}
          />
        ) : !verifyUser && userAccount ? (
          <ModalVerifyUser setModalCreatePost={setModalCreatePost} />
        ) : null}
      </div>
    </>
  );
};

export default CreatePost;
