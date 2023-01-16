import React, { useCallback } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { makeFollow } from "../../../../../../services/usersServices";
import { commentLikeStore } from "../../../../../../store/CommentLike";

const Follow = ({ user, item, setFollow }) => {

  const sendFollow = useCallback(async () => {
    try {
      const follow = {
        id: item._id,
        myId: user._id,
      };
      await makeFollow(item.nickName, follow);
      commentLikeStore.addToNewFollowArr(item);
      if (commentLikeStore.unFollow.length > 0) {
        commentLikeStore.unFollow.forEach((i) => {
          if (i._id === item._id) {
            return commentLikeStore.removeUnFollow(i);
          }
        });
      }

      setFollow(true);
    } catch {
      toast.error(`Something happened`);
    }
  }, []);

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          width: 95,
          height: 30,
          paddingLeft: 4,
          paddingRight: 4,
          paddingTop: 1,
        }}
        className="follow-btn"
        onClick={() => sendFollow()}
      >
        Follow
      </Button>
    </>
  );
};

export default Follow;
