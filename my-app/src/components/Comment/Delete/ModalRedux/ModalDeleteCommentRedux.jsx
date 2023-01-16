import React, { useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { deleteByCreatedAt } from "../../../../services/commentServices";
import { commentStore } from "../../../../store/addComment";

const ModalDeleteCommentRedux = ({
  user,
  item,
  setDeleteComment,
  setOpenModalDeleteCommentRedux,
}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const deleteCommentRedux = useCallback(async () => {
    try {
      setDeleteComment(false);
      const createdAt = item.createdAt;
      const createdBy = user._id;
      await deleteByCreatedAt(createdAt, createdBy);
      commentStore.addCommentDelete(item);
      commentStore.removeComment(item);
      commentStore.removeModalComment(item);
      setDeleteComment(true);
      setOpenModalDeleteCommentRedux(false);
    } catch {
      toast.error(`Something happened`);
      setOpenModalDeleteCommentRedux(false);
    }
    document.body.style.overflow = "visible";
  }, []);

  const closeModal = () => {
    setOpenModalDeleteCommentRedux(false);
    document.body.style.overflow = "visible";
  }


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
                onClick={() => deleteCommentRedux()}
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

export default ModalDeleteCommentRedux;
