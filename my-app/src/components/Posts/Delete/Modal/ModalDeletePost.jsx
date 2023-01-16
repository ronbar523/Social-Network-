import React, { useCallback, useEffect } from "react";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import { deletePost, deletePostByCreatedAt } from "../../../../services/postServices";
import { postStore } from "../../../../store/addPost";

const ModalDeletePost = ({
  user,
  item,
  setOpenModalDeletePost,
  setIsLoading,
}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    
  }, []);

  const postDelete = useCallback(async () => {
    try {
      const url = window.location.href;
      const urlWordsArr = url.split("/");

      if (item.countLikes !== undefined) {
        await deletePost(item._id);
        postStore.removeModalPost(item);
        postStore.addPostDeleted(item);
        setOpenModalDeletePost(false);
        setIsLoading(true);
      } else {
        await deletePostByCreatedAt(item.createdAt, user._id);
        postStore.removeModalPost(item);
        postStore.addPostDeleted(item);
        setOpenModalDeletePost(false);
        setIsLoading(true);
      }
      if(urlWordsArr[urlWordsArr.length - 2] === "post_page"){
        window.location.replace(`/my_profile/${user.nickName}`);
      }
    } catch {
      toast.error(`Something happened`);
      setOpenModalDeletePost(false);
    }
    document.body.style.overflow = "visible";
  }, []);

  const closeModal = () => {
    postStore.removeModalPost(item);
    setOpenModalDeletePost(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {item.createdBy !== user?._id && <Navigate to="/change_password" />}
      <div className="modal show fade model-all d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="px-3">Delete Post?</h4>
              <button
                className="btn-close"
                onClick={() => closeModal()}
              ></button>
            </div>
            <div className="modal-body">
              <h5 className="py-4 text-center model-text">
                Are you sure you want to delete this
              </h5>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary d-inline"
                data-bs-dismiss="modal"
                onClick={() => postDelete()}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-secondary d-inline"
                data-bs-dismiss="modal"
                onClick={() => closeModal()}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDeletePost;
