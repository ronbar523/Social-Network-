import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { removeLike2 } from "../../../../../../../../services/commentServices";

const UnLike = ({ i, user, setLike }) => {
  const unLike = useCallback(async () => {
    try {
      await removeLike2(i.createdAt, user._id);
      setLike(false);
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
          sx={{ fontSize: "25px", color: "blue" }}
        ></ThumbUpOffAltOutlinedIcon>
      </IconButton>
    </>
  );
};

export default UnLike;
