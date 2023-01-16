import React, { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import PhotoHeader from "./Photo/PhotoHeader";
import CreatedByAt from "./CreatedByAt/CreatedByAt";
import IconComment from "./IconComment/IconComment";
import { commentStore } from "../../../../../store/addComment";

const HeaderComment = ({
  user,
  comment,
  dateNow,
  arrLikes,
  setModalUpdate,
  like,
  setLike,
  countLikes,
  setCountLikes,
  setOpenModalDeleteComment,
  setModalLikeComment,
  setModalLogin,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (arrLikes.length > 0 && user && !commentStore.commentUpdated) {
      arrLikes.forEach((item) => {
        if (item === user?._id) {
          setLike(true);
        }
      });
    }
    setIsLoading(false);
  }, []);

  return (
    <>
      <CardHeader
        sx={{ marginLeft: -2.5, marginTop: -4, marginBottom: "15px" }}
        avatar={<PhotoHeader comment={comment} />}
        title={<CreatedByAt comment={comment} dateNow={dateNow} />}
        action={
          <IconComment
            user={user}
            comment={comment}
            like={like}
            setLike={setLike}
            setModalUpdate={setModalUpdate}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
            setOpenModalDeleteComment={setOpenModalDeleteComment}
            setModalLikeComment={setModalLikeComment}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setModalLogin={setModalLogin}
           
          />
        }
      />
    </>
  );
};

export default HeaderComment;
