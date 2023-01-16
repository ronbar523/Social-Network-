import React, { useCallback } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { sendUnFollow } from "../../../../../../services/usersServices";
import { commentLikeStore } from "../../../../../../store/CommentLike";

const UnFollow = ({ user, item, setFollow }) => {

  const removeFollow = useCallback(async () => {
    try {
      const unFollow = {
        id: item._id,
        myId: user._id,
      };
      await sendUnFollow(item.nickName, unFollow);
      commentLikeStore.addToUnFollowArr(item);
      if (commentLikeStore.newFollow.length > 0) {
        commentLikeStore.newFollow.forEach((i) => {
          if (i._id === item._id) {
            return commentLikeStore.removeFollow(i);
          }
        });
      }
      setFollow(false);
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
        onClick={() => removeFollow()}
      >
        unFollow
      </Button>
    </>
  );
};

export default UnFollow;
