import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import { commentLikeStore } from "../../../../../../../../store/CommentLike";
import { findUsersByCommentLike } from "../../../../../../../../services/commentServices";

const CountLike = ({ user, comment, like, countLikes, setModalLikeComment }) => {

  const showLikes = useCallback(async () => {
    const fetchData = async () => {
      commentLikeStore.userLike = like;
      const start = 0;
      let end = 0;
      let userLog = false;
      const flag2 = false;

      if (commentLikeStore.userLike && countLikes > 10) {
        end = 9;
        commentLikeStore.count = 9;
      } else if (commentLikeStore.userLike && countLikes <= 10) {
        end = countLikes - 1;
        commentLikeStore.count = countLikes;
      } else if (!commentLikeStore.userLike && countLikes <= 10) {
        end = countLikes;
        commentLikeStore.count = countLikes;
      } else {
        end = 10;
      }

      if (user) {
        userLog = true;
      }

      try {
        await findUsersByCommentLike(comment._id, start, end, userLog, flag2).then(
          (res) => {
            commentLikeStore.addToArrLikes(res.data.usersArr);
            commentLikeStore.flag = res.data.flag;
          }
        );
        if (like) {
          commentLikeStore.likes[0].unshift(user);
        }

        commentLikeStore.commentId = comment._id;
        commentLikeStore.countLikes = countLikes;
        setModalLikeComment(true);
      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
  }, []);

  return (
    <>
      {countLikes > 0 ? (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
          onClick={() => showLikes()}
        >
          <p className="count-comment"> {countLikes} </p>
        </IconButton>
      ) : (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
          disabled
        >
          <p className="count-comment"> {countLikes} </p>
        </IconButton>
      )}
    </>
  );
};

export default CountLike;
