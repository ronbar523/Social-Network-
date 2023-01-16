import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import CardContent from "@mui/material/CardContent";
import HeaderComment from "./Header/HeaderComment";
import { findCommentsById } from "../../../../services/postServices";
import { commentStore } from "../../../../store/addComment";
import UpdateComment from "../../Update/Update/UpdateComment";

const CardComment = ({
  user,
  i,
  dateNow,
  deleteComment,
  setOpenModalDeleteComment,
  setModalLikeComment,
  setModalLogin,
}) => {
  const [comment, setComment] = useState({});
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [arrLikes, setArrLikes] = useState([]);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [like, setLike] = useState(false);
  const [countLikes, setCountLikes] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      let flag = false
      try {
        if(commentStore.commentsDelete.length > 0){
          commentStore.commentsDelete.forEach((item) => {
            if(item === i) {
              return flag = true
            }
          })
          if(!flag){
            await findCommentsById(i).then((res) => {
              setComment(res.data);
              setDescription(res.data.description);
              setArrLikes(res.data.arrLikes);
              setCountLikes(res.data.countLikes);
              setIsLoading(false);
            });
          }
        } else {
          await findCommentsById(i).then((res) => {
            setComment(res.data);
            setDescription(res.data.description);
            setArrLikes(res.data.arrLikes);
            setCountLikes(res.data.countLikes);
            setIsLoading(false);
          });
        }
      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
  }, []);

  useEffect(() => {
    commentStore.arrComment.forEach((item) => {
      if (item === comment) {
        setIsLoading(true);
      }
    });
  }, [deleteComment]);

  return (
    <>
      {!isLoading && !modalUpdate ? (
        <CardContent
          className="comment-container"
          sx={{
            borderRadius: `24px 24px 24px 24px`,
            background: "lightgray",
            marginTop: "-2px",
            marginBottom: "10px",
          }}
        >
          <HeaderComment
            user={user}
            comment={comment}
            dateNow={dateNow}
            arrLikes={arrLikes}
            setModalUpdate={setModalUpdate}
            like={like}
            setLike={setLike}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
            setOpenModalDeleteComment={setOpenModalDeleteComment}
            setModalLikeComment={setModalLikeComment}
            setModalLogin={setModalLogin}
            
          />

          <p className="desc-comment"> {description} </p>
          
        </CardContent>
      ) : modalUpdate && !isLoading ? (
        <UpdateComment
          comment={comment}
          description={description}
          setDescription={setDescription}
          setModalUpdate={setModalUpdate}
        />
      ) : null}
    </>
  );
};

export default CardComment;
