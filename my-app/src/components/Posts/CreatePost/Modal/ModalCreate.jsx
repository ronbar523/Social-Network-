import React, { useState, useEffect, useCallback } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createNewPost } from "../../../../services/postServices";
import { postStore } from "../../../../store/addPost";

const ModalCreate = ({
  user,
  userMedia,
  createdByName,
  setModalCreatePost,
  keyNumber,
  setKeyNumber,
}) => {
  const [theDate, setTheDate] = useState("");

  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Fox");
  const [createdAt, setCreatedAt] = useState();
  const [media, setMedia] = useState("");

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

  useEffect(() => {
    let now2 = Date.now();
    setCreatedAt(now2);
  }, []);

  const handleOnSubmit = useCallback(async () => {
    try {
      if (/(?=.*[a-zA-Z0-9:.,?!#%^&*()-=+_/<>@])/.test(description) === true) {

        const post = {
          description: description,
          category: category,
          media: media,
          userMedia: userMedia,
          createdByName: createdByName,
          date: theDate,
          createdAt: createdAt,
        };

        console.log(post)

        if (postStore.posts.length > 0) {
          postStore.posts.forEach((item) => {
            if (item.description === description) {
              window.location.reload();
              throw "post already created";
            }
          });
        }
        await createNewPost(post);
        const userId = {
          createdBy: user._id,
          keyNumber: keyNumber,
        };
        const newPost = { ...post, ...userId };
        postStore.addPost(newPost);

        setModalCreatePost(false);
        setKeyNumber(keyNumber + 1);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <>
      <div className="d-block" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <Card className="cards">
              <div className="modal-header">
                <CardHeader
                  avatar={
                    <Avatar
                      alt={createdByName}
                      src={userMedia}
                      aria-label="recipe"
                    ></Avatar>
                  }
                  title={createdByName}
                />
                <button
                  className="btn-close button-close"
                  onClick={() => setModalCreatePost(false)}
                ></button>
              </div>
              <TextField
                className="input-create-post"
                id="standard-multiline-static"
                multiline
                autoFocus={true}
                rows={8}
                placeholder="Write something..."
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                className="input-create-post mt-3"
                placeholder="image"
                onChange={(e) => setMedia(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleOnSubmit()}
                disabled={description.length === 0}
                endIcon={<SendIcon>send</SendIcon>}
                className="input-create-post"
                sx={{
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                Send
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreate;
