import React, { useCallback } from "react";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import { sendUnFollow } from "../../../../../../services/usersServices";
import { postLikeStore } from "../../../../../../store/PostLike";

const UnFollow = ({ user, item, setFollow }) => {

  const removeFollow = useCallback(async () => {
    try {
      const unFollow = {
        id: item._id,
        myId: user?._id,
      };
      await sendUnFollow(item.nickName, unFollow);
      postLikeStore.addToUnFollowArr(item);
      if (postLikeStore.newFollow.length > 0) {
        postLikeStore.newFollow.forEach((i) => {
          if (i._id === item._id) {
            return postLikeStore.removeFollow(i);
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
