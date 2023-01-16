import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { commentStore } from "../../../../../../../store/addComment";

const CommentCount = ({
  item,
  isLoading,
  deleteComment,
}) => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (commentStore.comments.length > 0) {
      commentStore.comments.forEach((i) => {
        if (
          (i._id === item._id || i.postCreatedAt === item.createdAt) 
        ) {
          setCount(count + 1);
        }
      });
    }

  }, [isLoading]);


  useEffect(() => {
    if (commentStore.commentsDelete.length > 0) {
      commentStore.commentsDelete.forEach((i) => {
        if (i._id === item._id || i.postCreatedAt === item.createdAt) {
          setCount(count - 1);
        }
      });
    }
  }, [deleteComment]);

  useEffect(() => {
    commentStore.arrComment.forEach((i) => {
      if (i.createdPostBy === item._id) {
        setCount(count - 1);
      }
    })
  }, [deleteComment]);

  

  return (
    <>
      <IconButton
        sx={{
          height: 40,
          borderRadius: 0,
          marginTop: "15px",
          width: "80px",
          marginLeft: "-5px",
        }}
        disabled
      >
        
        <ChatBubbleOutlineOutlinedIcon
          sx={{ fontSize: "25px", color: "gray" }}
        ></ChatBubbleOutlineOutlinedIcon>
        {item.countComments !== undefined ? (
          <p className="count-comment-post"> {item.countComments + count} </p>
        ) : (
          <p className="count-comment-post"> {count} </p>
        )}
      </IconButton>
    </>
  );
};

export default CommentCount;
