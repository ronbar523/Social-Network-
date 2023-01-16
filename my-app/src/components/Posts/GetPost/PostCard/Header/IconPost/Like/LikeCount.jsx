import React, {  useCallback } from "react";
import { toast } from "react-toastify";
import IconButton from "@mui/material/IconButton";
import { postLikeStore } from "../../../../../../../store/PostLike";
import { findUsersByPostLike } from "../../../../../../../services/postServices";


const LikeCount = ({
  user, 
  item,
  countLike,
  countLikeRedux,
  setModalLike,
  setModalLikeRedux,
  like,
}) => {
  
  const showLikes = useCallback(async () => {
    
    const fetchData = async () => {
      postLikeStore.userLike = like
      const start = 0;
      let end = 0;
      let userLog = false
      const flag2 = false

      console.log(like)

      if (postLikeStore.userLike && countLike > 10) {
        end = 9;
        postLikeStore.count = 9;

      } else if (postLikeStore.userLike && countLike <= 10) {
        end = countLike - 1;
        postLikeStore.count = countLike;

      } else if (!postLikeStore.userLike && countLike <= 10) {
        end = countLike;
        postLikeStore.count = countLike;

      } else {
        end = 10;
      }

      if(user) {
        userLog = true
      }

      try {
        await findUsersByPostLike(item._id, start, end, userLog, flag2).then((res) =>
          {postLikeStore.addToArrLikes(res.data.usersArr); 
          postLikeStore.flag = res.data.flag}
        );
        if (like) {
          postLikeStore.likes[0].unshift(user);
        }

        postLikeStore.postId = item._id;
        postLikeStore.countLikes = countLike;
        setModalLike(true);
      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
  }, []);

 

  return (
    <>
      {countLike > 0 ? (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "15px",
            marginLeft: "-7px",
          }}
          onClick={() => showLikes()}
        >
          <p className="count-post"> {countLike} </p>
        </IconButton>
      ) : (countLike === 0 && countLikeRedux === 0) ||
        (countLike === undefined && countLikeRedux === 0) ? (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "15px",
            marginLeft: "-7px",
          }}
          disabled
        >
          {item._id !== undefined ? (
            <p className="count-post"> {countLike} </p>
          ) : (
            <p className="count-post"> {countLikeRedux} </p>
          )}
        </IconButton>
      ) : (
        <IconButton
          sx={{
            height: 30,
            borderRadius: 0,
            marginTop: "15px",
            marginLeft: "-7px",
          }}
          onClick={() => setModalLikeRedux(true)}
        >
          <p className="count-post"> {countLikeRedux} </p>
        </IconButton>
      )}
    </>
  );
};

export default LikeCount;
