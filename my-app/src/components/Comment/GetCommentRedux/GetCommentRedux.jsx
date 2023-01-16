import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import HeaderCommentRedux from "./CardComment/Header/HeaderCommentRedux";
import MainCommentRedux from "./CardComment/Main/MainCommentRedux";
import UpdateCommentRedux from "../Update/UpdateRedux/UpdateCommentRedux";

const GetCommentRedux = ({
  user,
  i,
  setOpenModalDeleteCommentRedux,
  setModalLikeCommentRedux,
}) => {

  const [modalUpdateRedux, setModalUpdateRedux] = useState(false);

  const [like, setLike] = useState(false);

  return (
    <> 
      {!modalUpdateRedux ? (
        <CardContent
          className="comment-container"
          sx={{
            borderRadius: `24px 24px 24px 24px`,
            background: "lightgray",
            marginTop: "-2px",
            marginBottom: "10px",
          }}
        >
          <HeaderCommentRedux
            user={user}
            i={i}
            setOpenModalDeleteCommentRedux={setOpenModalDeleteCommentRedux}
            setModalUpdateRedux={setModalUpdateRedux}
            like={like}
            setLike={setLike}
            setModalLikeCommentRedux={setModalLikeCommentRedux}
          />

          <MainCommentRedux i={i} />

        </CardContent>
        
      ) : (

        <UpdateCommentRedux
          user={user}
          i={i}
          modalUpdateRedux={modalUpdateRedux}
          setModalUpdateRedux={setModalUpdateRedux}
        />
      )}
    </>
  );
};

export default GetCommentRedux;
