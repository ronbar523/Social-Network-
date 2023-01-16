import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { findByCreatedAt, removeLike } from "../../../../../../../services/postServices";

const UnLike = ({
  user,
  item,
  setLike,
  countLike,
  setCountLike,
  setCountLikeRedux,
  setIsLoading2

}) => {
  const unLike = useCallback(async () => {
    try {
      setIsLoading2(true);
      const myId = user._id;
      if (item._id !== undefined) {
        const postId = item._id;
        await removeLike(postId, myId);
        setCountLike(countLike - 1);
      } else {
        const post = await findByCreatedAt(item.createdAt, user._id);
        await removeLike(post.data[0]._id, myId);
        setCountLikeRedux(0)
      }
      setLike(false);
    } catch {
      toast.error(`Something happened`);
    }
    setIsLoading2(false);
  }, []);

  return (
    <>
      <IconButton
        sx={{
          width: 40,
          height: 40,
          borderRadius: 0,
          marginTop: "15px",
          width: "40px",
          borderColor: "primary.main",
        }}
        className="icon-like-post"
        onClick={() => {
          unLike();
        }}
      >
        <ThumbUpOffAltOutlinedIcon
          sx={{ color: "blue", fontSize: "25px" }}
        ></ThumbUpOffAltOutlinedIcon>
      </IconButton>
    </>
  );
};

export default UnLike;
