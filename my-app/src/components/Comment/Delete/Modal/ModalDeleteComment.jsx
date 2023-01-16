import React, { useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { deleteById } from "../../../../services/commentServices";
import { commentStore } from "../../../../store/addComment";


const ModalDeleteComment = ({
  item,
  setDeleteComment,
  setOpenModalDeleteComment,
}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  
  

  const deleteComment = useCallback(async () => {
    try {
      setDeleteComment(false);
      await deleteById(item._id);
      commentStore.addCommentDelete(item._id);
      commentStore.addToArrComment(item);
      commentStore.removeModalComment(item);
      
      if (commentStore.arrDeleteIdPost.length === 0) {
        commentStore.addArrDeleteIdPost({
          postId: item.createdPostBy,
          count: 1
        })
      } else {
        let flag = false
        commentStore.arrDeleteIdPost.forEach((i) => {
          if (i.postId === item.createdPostBy) {
            return (i.count = i.count + 1, flag = false);
          } else {
            flag = true
          }
        })

        if(flag) {
          commentStore.addArrDeleteIdPost({
            postId: item.createdPostBy,
            count: 1,
          });
        }
      }

      setDeleteComment(true);
      setOpenModalDeleteComment(false);
    } catch {
      toast.error(`Something happened`);
      setOpenModalDeleteComment(false);
    }
    document.body.style.overflow = "visible";
  }, []);

  const closeModal = () => {
    setOpenModalDeleteComment(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <div className="modal show fade model-all d-block" tabIndex="-1">
        <div className="modal-dialog model-border model-block">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="px-3">Delete Comment?</h4>
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
                onClick={() => deleteComment()}
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

export default ModalDeleteComment;
