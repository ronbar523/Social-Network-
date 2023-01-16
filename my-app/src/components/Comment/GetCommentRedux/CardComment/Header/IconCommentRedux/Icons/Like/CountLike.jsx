import React from "react";
import IconButton from "@mui/material/IconButton";

const CountLike = ({ like, setModalLikeCommentRedux }) => {
  return (
    <>
      {like > 0 ? (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
          onClick={() => setModalLikeCommentRedux(true)}
        >
          <p className="count-comment"> 1 </p>
        </IconButton>
      ) : (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "-10px",
          }}
          disabled
        >
          <p className="count-comment"> 0 </p>
        </IconButton>
      )}
    </>
  );
};

export default CountLike;
