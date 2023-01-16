import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { sendLike } from "../../../../../../../../services/commentServices";

const Like = ({
  user,
  comment,
  setLike,
  countLikes,
  setCountLikes,
  setModalLogin,
  setIsLoading,
}) => {
  const makeLike = useCallback(async () => {
    try {
      setIsLoading(true);
      const commentId = comment._id;
      const myId = user._id;
      await sendLike(commentId, myId);
      setLike(true);
      setIsLoading(false);
      setCountLikes(countLikes + 1);
    } catch {
      toast.error(`Something happened`);
    }
  }, []);

  return (
    <>
      {user ? (
        <IconButton
          sx={{
            width: 30,
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
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
            width: 30,
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
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
