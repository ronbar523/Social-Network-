import React, {useState} from "react";
import CreateComment from "./Create/CreateComment";
import GetComment from "./GetComment/GetComment";
import GetCommentRedux from "./GetCommentRedux/GetCommentRedux";
import { commentStore } from "../../store/addComment";


const Comment = ({
  user,
  item,
  dateNow,
  isLoading,
  setIsLoading,
  deleteComment,
  openModalDeleteComment,
  setOpenModalDeleteComment,
  setOpenModalDeleteCommentRedux,
  setModalLikeComment,
  setModalLikeCommentRedux,
  setModalLogin,
}) => {
  
  const [sliceComment, setSliceComment] = useState(3);

  return (
    <>
      <CreateComment
        user={user}
        item={item}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setModalLogin={setModalLogin}
      />

      {commentStore.comments.length > 0
        ? commentStore.comments.map((i) => {
            if (i._id === item._id || i.postCreatedAt === item.createdAt) {
              return (
                <GetCommentRedux
                  user={user}
                  i={i}
                  key={i.keyNumber}
                  setOpenModalDeleteCommentRedux={
                    setOpenModalDeleteCommentRedux
                  }
                  setModalLikeCommentRedux={setModalLikeCommentRedux}
                />
              );
            }
          })
        : null}

      <GetComment
        user={user}
        item={item}
        dateNow={dateNow}
        deleteComment={deleteComment}
        sliceComment={sliceComment}
        setSliceComment={setSliceComment}
        openModalDeleteComment={openModalDeleteComment}
        setOpenModalDeleteComment={setOpenModalDeleteComment}
        setModalLikeComment={setModalLikeComment}
        setModalLogin={setModalLogin}
      />
    </>
  );
};
 
export default Comment;