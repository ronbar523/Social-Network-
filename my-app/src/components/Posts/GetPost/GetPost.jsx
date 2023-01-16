import React from "react";
import PostCard from "./PostCard/PostCard";

const GetPost = ({
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
  return (
    <>
      <PostCard
        user={user}
        item={item}
        deleteComment={deleteComment}
        setOpenModalDeletePost={setOpenModalDeletePost}
        openModalDeleteComment={openModalDeleteComment}
        setOpenModalDeleteComment={setOpenModalDeleteComment}
        setOpenModalDeleteCommentRedux={setOpenModalDeleteCommentRedux}
        openModalUpdate={openModalUpdate}
        setOpenModalUpdate={setOpenModalUpdate}
        setModalLike={setModalLike}
        setModalLikeRedux={setModalLikeRedux}
        setModalLikeComment={setModalLikeComment}
        setModalLikeCommentRedux={setModalLikeCommentRedux}
        setModalLogin={setModalLogin}
      />
    </>
  );
};

export default GetPost;
