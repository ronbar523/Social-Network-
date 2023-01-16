import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { removeLike } from "../../../../../../../../services/commentServices";

const UnLike = ({
  user,
  comment,
  setLike,
  countLikes,
  setCountLikes,
  setIsLoading,
}) => {
  const unLike = useCallback(async () => {
    try {
      setIsLoading(true);
      const commentId = comment._id;
      const myId = user._id;
      await removeLike(commentId, myId);
      setLike(false);
      setCountLikes(countLikes - 1);
      setIsLoading(false);
    } catch {
      toast.error(`Something happened`);
    }
  }, []);

  return (
    <>
      <IconButton
        sx={{
          width: 30,
          height: 30,
          borderRadius: 0,
          marginTop: "-10px",
        }}
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
