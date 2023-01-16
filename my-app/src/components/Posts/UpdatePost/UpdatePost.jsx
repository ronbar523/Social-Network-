import React, { useState, useEffect ,useCallback } from "react";
import { toast } from "react-toastify";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { updatePost, updatePostByCreatedAt } from "../../../services/postServices";
import { postStore } from "../../../store/addPost";

const UpdatePost = ({
  user,
  item,
  setUpdateModal,
  description,
  setDescription,
}) => {

  const [descriptionUpdate, setDescriptionUpdate] = useState(description); 

  const cancelUpdate = () => {
    setDescription(descriptionUpdate);
    setUpdateModal(false);
  };

  const postEnterSubmit = (e) => {
    if (e.charCode === 13 && e.ctrlKey === true) {
      return setDescription(description + "\n");
    }
    if (e.key === "Enter" && e.shiftKey === false) {
      return postUpdate();
    }
  };

  const postUpdate = useCallback(async () => {
    try {
      if (descriptionUpdate !== description){
        if (item.countLike !== undefined) {
          const post = {
            description: description,
          };
          await updatePost(item._id, post);
          const thePost = {
            description: description,
            _id: item._id,
          };
          postStore.addUpdatePost(thePost);
          setUpdateModal(false);
        } else {
          const post = {
            description: description,
          };

          await updatePostByCreatedAt(item.createdAt, user._id, post);
          item.description = description;
          setUpdateModal(false);
        }
      } else {
        setUpdateModal(false);
      }
    } catch (err) {
      setUpdateModal(false);
      toast.error(`Something happened`);
    }
  }, [postEnterSubmit]);


  useEffect(() => {   
    if(postStore.updatePosts.length === 0) {
      setDescription(item.description);
    } 
    let flag = false;
    postStore.updatePosts.forEach((i) => {
      if(i._id === item._id){
        flag = true
      } 
    })
    if(!flag){
      setDescription(item.description)
    }
  }, []);

  return (
    <>
      {/* <CardContent className="desc-post"> */}
      <div className="update-post">
        <TextField
          id="filled-multiline-flexible"
          multiline
          autoFocus={true}
          value={description}
          onKeyPress={(e) => postEnterSubmit(e)}
          onChange={(e) => setDescription(e.target.value)}
          className="update-post2"
          sx={
            {
              // "& fieldset": { border: "none" },
            }
          }
        />
      </div>
      {/* </CardContent> */}
      {/* <button
        className="cancel-button-update-comment"
        onClick={() => cancelUpdate()}
      >
        cancel
      </button> */}
    </>
  );
};

export default UpdatePost;
