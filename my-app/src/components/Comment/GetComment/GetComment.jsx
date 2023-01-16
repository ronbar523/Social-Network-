import React, { useEffect, useState } from "react";
import { commentStore } from "../../../store/addComment";
import CardComment from "./CardComment/CardComment";

const GetComment = ({
  user,
  item,
  dateNow,
  deleteComment,
  sliceComment,
  setSliceComment,
  openModalDeleteComment,
  setOpenModalDeleteComment,
  setModalLikeComment,
  setModalLogin
}) => {


  const [countDelete, setCountDelete] = useState(0);

  useEffect(() => {
    setCountDelete(item.countComments);
    if (commentStore.arrDeleteIdPost.length > 0) {
      commentStore.arrDeleteIdPost.forEach((i) => {
        if(i.postId === item._id) {
          setCountDelete(item.countComments - i.count);
        }
      })
    }
  }, [openModalDeleteComment]);



 
  return (
    <>
      {item.arrComments !== undefined
        ? item.arrComments.slice(0, sliceComment).map((i, index) => {
            return (
              <CardComment
                user={user}
                i={i}
                key={index}
                dateNow={dateNow}
                deleteComment={deleteComment}
                sliceComment={sliceComment}
                setOpenModalDeleteComment={setOpenModalDeleteComment}
                setModalLikeComment={setModalLikeComment}
                setModalLogin={setModalLogin}
              />
            );
          })
        : null}

      {sliceComment < item.countComments ? (
        <button
          className="show-more-btn-comment"
          onClick={() => setSliceComment(item.countComments)}
        >
          Show All Comments
        </button>
      ) : sliceComment === item.countComments &&
        countDelete > 3 ? (
        <button
          className="show-more-btn-comment"
          onClick={() => setSliceComment(3)}
        >
          Show Less
        </button>
      ) : null}
    </>
  );
};

export default GetComment;
