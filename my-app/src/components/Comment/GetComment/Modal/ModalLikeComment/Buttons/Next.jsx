import React, {  useCallback } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { commentLikeStore } from "../../../../../../store/CommentLike";
import { findUsersByCommentLike } from "../../../../../../services/commentServices";

const Next = ({
  user,
  setShowArr,
  disableNext,
  setDisableNext,
  setDisableBack,
}) => {
  const next = useCallback(async () => {
    try {
      if (commentLikeStore.x + 1 === commentLikeStore.likes.length) {
        if (commentLikeStore.countLikes >= commentLikeStore.count) {
          const start = commentLikeStore.count;
          
          console.log(commentLikeStore.count);

          let end = commentLikeStore.count + 10;

          if (end >= commentLikeStore.countLikes) {
            end = commentLikeStore.countLikes;
          }
          let userLog = false;

          if (user) {
            userLog = true;
          }

          if (!commentLikeStore.flag) {
            await findUsersByCommentLike(
              commentLikeStore.commentId,
              start,
              end,
              userLog,
              commentLikeStore.flag
            ).then((res) => {
              commentLikeStore.addToArrLikes(res.data.usersArr);
              commentLikeStore.flag = res.data.flag;
            });
          } else {
            await findUsersByCommentLike(
              commentLikeStore.commentId,
              start,
              end,
              userLog,
              commentLikeStore.flag
            ).then((res) => commentLikeStore.addToArrLikes(res.data.usersArr));
          }
          commentLikeStore.count = commentLikeStore.count + 10;
        }
      }

      if ((commentLikeStore.x + 1) * 10 + 10 >= commentLikeStore.countLikes) {
        setDisableNext(true);
      }

      commentLikeStore.x = commentLikeStore.x + 1;
      setShowArr(commentLikeStore.likes[commentLikeStore.x]);
      setDisableBack(false);
    } catch {
      toast.error(`Something happened`);
    }
  }, []);

  return (
    <>
      <Button
        sx={{
          height: 35,
        }}
        variant="outlined"
        disabled={disableNext}
        onClick={() => next()}
      >
        <NavigateNextIcon />
      </Button>
    </>
  );
};

export default Next;
