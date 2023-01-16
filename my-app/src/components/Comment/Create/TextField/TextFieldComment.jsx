import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Avatar from "@mui/material/Avatar";
import { findUserByNickName } from "../../../../services/usersServices";
import { createNewComment } from "../../../../services/commentServices";
import { findByCreatedAt } from "../../../../services/postServices";
import { commentStore } from "../../../../store/addComment";

const TextFieldComment = ({
  user,
  item,
  isLoading,
  setIsLoading,
  setModalLogin,
}) => {
  const [theDate, setTheDate] = useState("");
  const [description, setDescription] = useState("");
  const [myUserPhoto, setMyUserPhoto] = useState("");
  const [createdAt, setCreatedAt] = useState();
  const [keyNumber, setKeyNumber] = useState(0);

  useEffect(() => {
    if (user) {
      setMyUserPhoto(user.photo)
      // findUserByNickName(user?.nickName).then((res) =>
      // console.log(res.data)
        // setMyUserPhoto(res.data[0].photo)
      // );
    }
  }, []);

  // console.log(user.photo);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let fullDate = new Date();
    setTheDate(
      fullDate.getDate() +
        " " +
        monthNames[fullDate.getMonth()] +
        " " +
        fullDate.getFullYear()
    );
  }, []);

  const commentEnterSubmit = (e) => {
    if (e.charCode === 13 && e.ctrlKey === true) {
      return setDescription(description + "\n");
    }
    if (e.key === "Enter" && e.shiftKey === false) {
      return createComment();
    }
  };

  useEffect(() => {
    let now2 = Date.now();
    setCreatedAt(now2);
  }, [isLoading]);
  

  const createComment = useCallback(async () => {
    try {
      
      
      if (/(?=.*[a-zA-Z0-9:.,?!#%^&*()-=+_/<>@])/.test(description) === true) {
        const comment = {
          date: theDate,
          description: description,
          createdAt: createdAt,
          userMedia: myUserPhoto,
        };

        console.log(comment);
        if (item._id !== undefined) {
          await createNewComment(item._id, comment);
          const postId = {
            _id: item._id,
            keyNumber: keyNumber,
          };

          const comment2 = { ...postId, ...comment };
          commentStore.addComment(comment2);
        } else {
          const post = await findByCreatedAt(item.createdAt, user._id);
          const postId = {
            _id: post.data[0]._id,
            postCreatedAt: post.data[0].createdAt,
            keyNumber: keyNumber,
          };

          const comment2 = { ...postId, ...comment };
          await createNewComment(post.data[0]._id, comment);
          commentStore.addComment(comment2);
        }
        setKeyNumber(keyNumber + 1);
        setDescription("");
        setIsLoading(!isLoading);
      } 
    } catch {
      toast.error(`Something happened`);
    }
  }, [commentEnterSubmit]);

  return (
    <>
      {user ? (
        <TextField
          id="filled-multiline-flexible"
          multiline
          value={description}
          placeholder="Write something"
          onKeyPress={(e) => commentEnterSubmit(e)}
          onChange={(e) => setDescription(e.target.value)}
          className="create-comment"
          sx={{
            marginTop: 1.5,
            background: "lightgray",
            borderRadius: `24px 24px 24px 24px`,
            "& fieldset": { border: "none" },
          }}
          inputProps={{ maxLength: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {description.length === 0 ? (
                  <Avatar
                    alt={user?.nickName}
                    src={myUserPhoto}
                    sx={{ width: 44, height: 44, marginRight: 1.5 }}
                  />
                ) : null}
              </InputAdornment>
            ),
          }}
        />
      ) : (
        <TextField
          id="filled-multiline-flexible"
          multiline
          placeholder="Write something"
          onClick={() => setModalLogin(true)}
          value={""}
          className="create-comment"
          sx={{
            marginTop: 1.5,
            background: "lightgray",
            borderRadius: `24px 24px 24px 24px`,
            "& fieldset": { border: "none" },
          }}
          inputProps={{ maxLength: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar sx={{ width: 44, height: 44, marginRight: 1.5 }} />
              </InputAdornment>
            ),
          }}
        />
      )}
    </>
  );
};

export default TextFieldComment;
