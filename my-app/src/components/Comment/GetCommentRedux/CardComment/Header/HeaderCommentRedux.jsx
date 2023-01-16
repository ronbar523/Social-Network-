import React from "react";
import CreatedByAt from "./CreatedByAt/CreatedByAt";
import PhotoHeader from "./Photo/PhotoHeader";
import CardHeader from "@mui/material/CardHeader";
import IconCommentRedux from "./IconCommentRedux/IconCommentRedux";


const HeaderCommentRedux = ({
  user,
  i,
  setModalUpdateRedux,
  setOpenModalDeleteCommentRedux,
  like,
  setLike,
  setModalLikeCommentRedux,
}) => {
  return (
    <>
      <CardHeader
        sx={{ marginLeft: -2.5, marginTop: -4, marginBottom: "15px" }}
        avatar={<PhotoHeader user={user} />}
        title={<CreatedByAt user={user} />}
        action={
          <IconCommentRedux
            user={user}
            i={i}
            setModalUpdateRedux={setModalUpdateRedux}
            setOpenModalDeleteCommentRedux={setOpenModalDeleteCommentRedux}
            like={like}
            setLike={setLike}
            setModalLikeCommentRedux={setModalLikeCommentRedux}
          />
        }
      />
    </>
  );
};

 
export default HeaderCommentRedux;