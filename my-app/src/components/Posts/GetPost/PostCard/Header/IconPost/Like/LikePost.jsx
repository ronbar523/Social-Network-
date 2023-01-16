import React, { useCallback } from "react";
import { toast } from "react-toastify";
import { findByCreatedAt, sendLike } from "../../../../../../../services/postServices";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";


const Like = ({
  user,
  item,
  setLike,
  countLike,
  setCountLike,
  setCountLikeRedux,
  setIsLoading2,
  setModalLogin,
}) => {
  const makeLike = useCallback(async () => {
    try {
      setIsLoading2(true);
      const myId = user._id;
      if (item._id !== undefined) {
        const postId = item._id;
        await sendLike(postId, myId);
        setCountLike(countLike + 1);
      } else {
        const post = await findByCreatedAt(item.createdAt, user._id);
        await sendLike(post.data[0]._id, myId);
        setCountLikeRedux(1);
      }
      setLike(true);
    } catch {
      toast.error(`Something happened`);
    }
    setIsLoading2(false);
  }, []);

  return (
    <>
      {user ? (
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
            makeLike();
          }}
        >
          <ThumbUpOffAltOutlinedIcon
            sx={{ fontSize: "25px" }}
          ></ThumbUpOffAltOutlinedIcon>
        </IconButton>
      ) : (
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
            setModalLogin(true);
          }}
        >
          <ThumbUpOffAltOutlinedIcon
            sx={{ fontSize: "25px" }}
          ></ThumbUpOffAltOutlinedIcon>
        </IconButton>
      )}
    </>
  );
};

export default Like;
