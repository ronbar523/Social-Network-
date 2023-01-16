import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/usersServices";
import { findAllPosts } from "../../services/postServices";
import { postStore } from "../../store/addPost";
import { commentStore } from "../../store/addComment";
import Navbar from "../../components/Navbar/Navbar";
import CreatePost from "../../components/Posts/CreatePost/Modal/CreatePost";
import GetPost from "../../components/Posts/GetPost/GetPost";
import ModalDeletePost from "../../components/Posts/Delete/Modal/ModalDeletePost";
import ModalDeleteComment from "../../components/Comment/Delete/Modal/ModalDeleteComment";
import ModalDeleteCommentRedux from "../../components/Comment/Delete/ModalRedux/ModalDeleteCommentRedux";
import ModalLike from "../../components/Posts/GetPost/Modal/ModalLike";
import ModalLikeRedux from "../../components/Posts/GetPost/Modal/ModalLikeRedux";
import ModalLikeComment from "../../components/Comment/GetComment/Modal/ModalLikeComment";
import ModalLikeCommentRedux from "../../components/Comment/GetCommentRedux/Modal/ModalLikeCommentRedux";
import ModalLogin from "../../components/Posts/GetPost/Modal/ModalLogin";

const ShowPost = () => {
  const user = getCurrentUser();
  
  const [postArr, setPostArr] = useState([]);

  const [closeModal, setCloseModal] = useState(false);

  const [modelCreatePost, setModalCreatePost] = useState(false);
  const [keyNumber, setKeyNumber] = useState(0)
  const [verifyUser, setVerifyUser] = useState(false);
  
  const [deleteComment, setDeleteComment] = useState(false);
  const [openModalDeletePost, setOpenModalDeletePost] = useState(false);
  const [openModalDeleteComment, setOpenModalDeleteComment] = useState(false);
  const [openModalDeleteCommentRedux, setOpenModalDeleteCommentRedux] =
    useState(false);

  const [isLoading, setIsLoading] = useState(true)

  const [openModalUpdate, setOpenModalUpdate] = useState(false);

  const [modalLike, setModalLike] = useState(false);
  const [modalLikeRedux, setModalLikeRedux] = useState(false);

  const [modalLikeComment, setModalLikeComment] = useState(false);
  const [modalLikeCommentRedux, setModalLikeCommentRedux] = useState(false);

  const [modalLogin, setModalLogin] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await findAllPosts().then((res) => setPostArr(res.data));
        setIsLoading(false)
      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
  }, []);


  useEffect(() => {
    if (postStore.deletedPosts.length > 0) {
      postStore.deletedPosts.map((item) => {
        let flag = false;
        postArr.forEach((i) => {
          if (item._id === i._id) {
            postArr.splice(i, 1);
            flag = true;
          }
        });
        if (!flag && postStore.posts.length > 0) {
          postStore.posts.forEach((i) => {
            if (item.createdAt === i.createdAt) {
              postStore.posts.splice(i, 1);
            }
          });
        }
      });
    }
    setIsLoading(false);
  }, [openModalDeletePost]);



  return (
    <>
      <header>
        <Navbar closeModal={closeModal} setCloseModal={setCloseModal} />
      </header>
      
      {!isLoading ? (
        <main className="bg-light" onFocus={() => setCloseModal(true)}>
          <div
            className={
              
              openModalDeletePost ||
              openModalDeleteComment ||
              openModalDeleteCommentRedux ||
              openModalUpdate ||
              modalLike ||
              modalLikeRedux ||
              modalLikeComment ||
              modalLikeCommentRedux ||
              modalLogin
                ? "opacity-modal"
                : ""
            }
          >
            <CreatePost
              user={user}
              modelCreatePost={modelCreatePost}
              setModalCreatePost={setModalCreatePost}
              verifyUser={verifyUser}
              setVerifyUser={setVerifyUser}
              keyNumber={keyNumber}
              setKeyNumber={setKeyNumber}
            />
          </div>

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
            {postStore.posts.length > 0
              ? postStore.posts.map((item) => {
                  return (
                    <GetPost
                      user={user}
                      item={item}
                      key={item.keyNumber}
                      deleteComment={deleteComment}
                      setOpenModalDeletePost={setOpenModalDeletePost}
                      
                      setOpenModalDeleteComment={setOpenModalDeleteComment}
                      setOpenModalDeleteCommentRedux={
                        setOpenModalDeleteCommentRedux
                      }
                      openModalUpdate={openModalUpdate}
                      setOpenModalUpdate={setOpenModalUpdate}
                      setModalLikeRedux={setModalLikeRedux}
                      setModalLikeCommentRedux={setModalLikeCommentRedux}
                    />
                  );
                })
              : null}

            {postArr
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((item) => {
                return (
                  <GetPost
                    user={user}
                    item={item}
                    key={item._id}
                    deleteComment={deleteComment}
                    openModalDeleteComment={openModalDeleteComment}
                    setOpenModalDeletePost={setOpenModalDeletePost}
                    setOpenModalDeleteComment={setOpenModalDeleteComment}
                    setOpenModalDeleteCommentRedux={
                      setOpenModalDeleteCommentRedux
                    }
                    openModalUpdate={openModalUpdate}
                    setOpenModalUpdate={setOpenModalUpdate}
                    setModalLike={setModalLike}
                    setModalLikeComment={setModalLikeComment}
                    setModalLikeCommentRedux={setModalLikeCommentRedux}
                    setModalLogin={setModalLogin}
                  />
                );
              })}
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
      ) : null}
    </>
  );
};

export default ShowPost;
