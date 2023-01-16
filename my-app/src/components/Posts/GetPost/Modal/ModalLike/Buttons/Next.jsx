import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { postLikeStore } from "../../../../../../store/PostLike";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { findUsersByPostLike } from "../../../../../../services/postServices";

const Next = ({
  user,
  setShowArr,
  disableNext,
  setDisableNext,
  setDisableBack,
}) => {
    
  const next = useCallback(async () => {
    try {
      if (postLikeStore.x + 1 === postLikeStore.likes.length) {
        if (postLikeStore.countLikes >= postLikeStore.count) {
          const start = postLikeStore.count;

          let end = postLikeStore.count + 10;

          if (end >= postLikeStore.countLikes) {
            end = postLikeStore.countLikes;
          }
          let userLog = false;

          if (user) {
            userLog = true;
          }

          if (!postLikeStore.flag) {
            await findUsersByPostLike(
              postLikeStore.postId,
              start,
              end,
              userLog,
              postLikeStore.flag
            ).then((res) => {
              postLikeStore.addToArrLikes(res.data.usersArr);
              postLikeStore.flag = res.data.flag;
            });
          } else {
            await findUsersByPostLike(
              postLikeStore.postId,
              start,
              end,
              userLog,
              postLikeStore.flag
            ).then((res) => postLikeStore.addToArrLikes(res.data.usersArr));
          }
          postLikeStore.count = postLikeStore.count + 10;
        }
      }

      if ((postLikeStore.x + 1) * 10 + 10 >= postLikeStore.countLikes) {
        setDisableNext(true);
      }

      postLikeStore.x = postLikeStore.x + 1;
      setShowArr(postLikeStore.likes[postLikeStore.x]);
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
