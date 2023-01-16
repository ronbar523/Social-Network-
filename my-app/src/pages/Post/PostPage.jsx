import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { findPostById } from "../../services/postServices";
import { getCurrentUser } from "../../services/usersServices";
import Navbar from "../../components/Navbar/Navbar";
import GetPost from "../../components/Posts/GetPost/GetPost";
import ModalLike from "../../components/Posts/GetPost/Modal/ModalLike";
import ModalLikeComment from "../../components/Comment/GetComment/Modal/ModalLikeComment";
import ModalLikeCommentRedux from "../../components/Comment/GetCommentRedux/Modal/ModalLikeCommentRedux";
import ModalDeleteCommentRedux from "../../components/Comment/Delete/ModalRedux/ModalDeleteCommentRedux";
import { commentStore } from "../../store/addComment";
import ModalDeleteComment from "../../components/Comment/Delete/Modal/ModalDeleteComment";
import ModalLogin from "../../components/Posts/GetPost/Modal/ModalLogin";
import ModalDeletePost from "../../components/Posts/Delete/Modal/ModalDeletePost";
import ModalLikeRedux from "../../components/Posts/GetPost/Modal/ModalLikeRedux";

import { postStore } from "../../store/addPost";

const PostPage = () => {

  const user = getCurrentUser();

  const [item, setPost] = useState({});
  
  const [isLoading, setIsLoading] = useState(true);
  const [closeModal, setCloseModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const urlWordsArr = url.split("/");
        const postId = urlWordsArr[urlWordsArr.length - 1];
        
        await findPostById(postId).then((res) => {
          setPost(res.data);
        });
        setIsLoading(false);

      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
    
  }, []);

  const [deleteComment, setDeleteComment] = useState(false);
  const [openModalDeletePost, setOpenModalDeletePost] = useState(false);
  const [openModalDeleteComment, setOpenModalDeleteComment] = useState(false);
  const [openModalDeleteCommentRedux, setOpenModalDeleteCommentRedux] =
    useState(false);
  
  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [modalLike, setModalLike] = useState(false);
  const [modalLikeRedux, setModalLikeRedux] = useState(false);

  const [modalLikeComment, setModalLikeComment] = useState(false);
  const [modalLikeCommentRedux, setModalLikeCommentRedux] = useState(false);
    
  const [modalLogin, setModalLogin] = useState(false);

  return (
    <>
      <header>
        <Navbar closeModal={closeModal} setCloseModal={setCloseModal} />
      </header>

      <main className="bg-light" onFocus={() => setCloseModal(true)}>
        <br></br>
        <div
          className={
            openModalDeletePost ||
            openModalDeleteComment ||
            openModalDeleteCommentRedux ||
            modalLike ||
            modalLikeRedux ||
            modalLikeComment ||
            modalLikeCommentRedux ||
            modalLogin
              ? "cards opacity-modal"
              : "cards"
          }
        >
          {!isLoading ? (
            <div className="cards">
              <GetPost
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
                setModalLikeComment={setModalLikeComment}
                setModalLikeCommentRedux={setModalLikeCommentRedux}
                setModalLogin={setModalLogin}
              />
            </div>
          ) : null}
        </div>

        {modalLogin ? (
          <ModalLogin user={user} setModalLogin={setModalLogin} />
        ) : null}

        {openModalDeletePost
          ? postStore.modalDeletePosts.map((item, index) => {
              return (
                <ModalDeletePost
                  user={user}
                  item={item}
                  key={index}
                  setOpenModalDeletePost={setOpenModalDeletePost}
                  setIsLoading={setIsLoading}
                />
              );
            })
          : null}

        {openModalDeleteComment
          ? commentStore.modalDeleteComment.map((item, index) => {
              return (
                <ModalDeleteComment
                  item={item}
                  key={index}
                  setDeleteComment={setDeleteComment}
                  setOpenModalDeleteComment={setOpenModalDeleteComment}
                />
              );
            })
          : null}

        {openModalDeleteCommentRedux
          ? commentStore.modalDeleteComment.map((item, index) => {
              return (
                <ModalDeleteCommentRedux
                  user={user}
                  item={item}
                  key={index}
                  setDeleteComment={setDeleteComment}
                  setOpenModalDeleteCommentRedux={
                    setOpenModalDeleteCommentRedux
                  }
                />
              );
            })
          : null}

        {modalLike ? (
          <ModalLike user={user} setModalLike={setModalLike} />
        ) : null}

        {/* check */}
        {modalLikeRedux ? (
          <ModalLikeRedux user={user} setModalLikeRedux={setModalLikeRedux} />
        ) : null}

        {modalLikeComment ? (
          <ModalLikeComment
            user={user}
            setModalLikeComment={setModalLikeComment}
          />
        ) : null}

        {modalLikeCommentRedux ? (
          <ModalLikeCommentRedux
            user={user}
            setModalLikeCommentRedux={setModalLikeCommentRedux}
          />
        ) : null}
      </main>
    </>
  );
};

export default PostPage;
