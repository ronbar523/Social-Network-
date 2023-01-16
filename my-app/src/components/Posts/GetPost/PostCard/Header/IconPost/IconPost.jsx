import React, { useState, useEffect } from "react";
import { CardActions } from "@mui/material";
import UnLikePost from "./Like/UnLikePost";
import LikePost from "./Like/LikePost";
import LikeCount from "./Like/LikeCount";
import ShareCount from "./Share/ShareCount";
import CommentCount from "./Comment/CommentCount";

const IconPost = ({
  user,
  item,
  isLoading,
  deleteComment,
  setModalLike,
  setModalLikeRedux,
  setModalLogin,
}) => {
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(item.countLikes);
  const [countLikeRedux, setCountLikeRedux] = useState(0);
  const [isLoading2, setIsLoading2] = useState(true);

  useEffect(() => {
    if (user && item.arrLikes !== undefined) {
      item.arrLikes.forEach((item) => {
        if (item === user?._id) {
          setLike(true);
        }
      });
    }
    setIsLoading2(false);
    setCountLikeRedux(0)
  }, []);

  return (
    <>
      <CardActions disableSpacing className="ruler-icons-post">
        {like ? (
          <UnLikePost
            user={user}
            item={item}
            setLike={setLike}
            countLike={countLike}
            setCountLike={setCountLike}
            setCountLikeRedux={setCountLikeRedux}
            setIsLoading2={setIsLoading2}
          />
        ) : (
          <LikePost
            user={user}
            item={item}
            setLike={setLike}
            countLike={countLike}
            setCountLike={setCountLike}
            setCountLikeRedux={setCountLikeRedux}
            setIsLoading2={setIsLoading2}
            setModalLogin={setModalLogin}
          />
        )}
        {!isLoading2 ? (
          <LikeCount
            user={user}
            item={item}
            countLike={countLike}
            countLikeRedux={countLikeRedux}
            setModalLike={setModalLike}
            setModalLikeRedux={setModalLikeRedux}
            like={like}
          />
        ) : null}

        <CommentCount
          item={item}
          isLoading={isLoading}
          deleteComment={deleteComment}
        />
        <ShareCount />
      </CardActions>
    </>
  );
};

export default IconPost;
