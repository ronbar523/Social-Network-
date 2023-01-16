import React, { useState, useMemo, useEffect } from "react";
import Card from "@mui/material/Card";
import HeaderPost from "./Header/HeaderPost";
import MainPost from "./Main/MainPost";
import Comment from "../../../Comment/Comment";
import IconPost from "./Header/IconPost/IconPost";
import { postStore } from "../../../../store/addPost";
import ModalEditPost from "../../UpdatePost/Modal/ModalEditPost";

const Posts = ({
  user,
  item,
  deleteComment,
  setOpenModalDeletePost,
  openModalDeleteComment,
  setOpenModalDeleteComment,
  setOpenModalDeleteCommentRedux,
  openModalUpdate,
  setOpenModalUpdate,
  setModalLike,
  setModalLikeRedux,
  setModalLikeComment,
  setModalLikeCommentRedux,
  setModalLogin,
}) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDescription, setIsLoadingDescription] = useState(true);
  const [strDescription, setStrDescription] = useState("");

  const dateNow = useMemo(() => {
    return Date.now();
  }, []);

  const sec = useMemo(() => {
    return (dateNow - item.createdAt) / 1000;
  }, [dateNow]);

  useEffect(() => {
    if (postStore.updatePosts.length < 1) {
      setStrDescription(item.description.split(/\r\n|\r|\n/));
      setIsLoadingDescription(false);
    } else {
      setIsLoadingDescription(true);
      postStore.updatePosts.forEach((i) => {
        if (i._id === item._id) {
          setStrDescription(i.description.split(/\r\n|\r|\n/));
        }
      });
      setIsLoadingDescription(false);
    }
  }, [openModalUpdate]);

  return (
    <>
      <Card sx={{ marginTop: "20px", marginBottom: "40px" }}>
        <div className={openModalUpdate ? "opacity-modal" : ""}>
          <HeaderPost
            user={user}
            item={item}
            sec={sec}
            setOpenModalUpdate={setOpenModalUpdate}
            setOpenModalDeletePost={setOpenModalDeletePost}
          />
          <MainPost
            item={item}
            strDescription={strDescription}
            isLoadingDescription={isLoadingDescription}
          />

          <hr className="hr2"></hr>

          <IconPost
            user={user}
            item={item}
            isLoading={isLoading}
            deleteComment={deleteComment}
            setModalLike={setModalLike}
            setModalLikeRedux={setModalLikeRedux}
            setModalLogin={setModalLogin}
          />

          <hr className="hr3"></hr>

          <Comment
            user={user}
            item={item}
            dateNow={dateNow}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            deleteComment={deleteComment}
            openModalDeleteComment={openModalDeleteComment}
            setOpenModalDeleteComment={setOpenModalDeleteComment}
            setOpenModalDeleteCommentRedux={setOpenModalDeleteCommentRedux}
            setModalLikeComment={setModalLikeComment}
            setModalLikeCommentRedux={setModalLikeCommentRedux}
            setModalLogin={setModalLogin}
          />
        </div>
        {openModalUpdate && postStore.modalUpdatePosts.length > 0
          ? postStore.modalUpdatePosts.map((i, index) => {
              return (
                <ModalEditPost
                  user={user}
                  key={index}
                  i={i}
                  item={item}
                  setOpenModalUpdate={setOpenModalUpdate}
                />
              );
            })
          : null}
      </Card>
    </>
  );
};

export default Posts;
