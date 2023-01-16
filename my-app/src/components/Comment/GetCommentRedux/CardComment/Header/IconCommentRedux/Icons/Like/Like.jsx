import React, { useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { sendLike2 } from "../../../../../../../../services/commentServices";

const Like = ({ i, user, setLike }) => {

  const makeLike = useCallback(async () => {
    try {
      await sendLike2(i.createdAt, user._id);
      setLike(true);
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
          makeLike();
        }}
      >
        <ThumbUpOffAltOutlinedIcon
          sx={{ fontSize: "25px" }}
        ></ThumbUpOffAltOutlinedIcon>
      </IconButton>
    </>
  );
};

export default Like;
