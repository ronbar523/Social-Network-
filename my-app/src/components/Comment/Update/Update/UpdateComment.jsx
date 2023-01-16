import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { updateCommentById } from "../../../../services/commentServices";
import { commentStore } from "../../../../store/addComment";

const UpdateComment = ({
  comment,
  setModalUpdate,
  description,
  setDescription,
}) => {

  const [descriptionUpdate, setDescriptionUpdate] = useState(description); 

  const cancelUpdate = () => {
    setDescription(descriptionUpdate);
    setModalUpdate(false)
  }

  const commentEnterSubmit = (e) => {
      if (e.charCode === 13 && e.ctrlKey === true) {
        return setDescription(description + "\n");
      }
      if (e.key === "Enter" && e.shiftKey === false) {
        return updateComment();
      }
  };


  const updateComment = useCallback(async () => {
    try {
      if (descriptionUpdate !== description) {
        const newComment = {
          description: description,
        };
        const id = comment._id;
        await updateCommentById(id, newComment);
        commentStore.commentUpdated = true;
        setModalUpdate(false);
      } else {
        setModalUpdate(false);
      }
    } catch {
      toast.error(`Something happened`);
      setModalUpdate(false);
    }
    
  }, [commentEnterSubmit]);

  return (
    <>
      <CardContent
        className="create-comment-container"
        sx={{
          display: "flex",
          border: "0px",
          marginTop: "-35px",
          borderRadius: `24px 24px 24px 24px`,
        }}
      >
        <TextField
          id="filled-multiline-flexible"
          multiline
          autoFocus={true}
          value={description}
          onKeyPress={(e) => commentEnterSubmit(e)}
          onChange={(e) => setDescription(e.target.value)}
          className="create-comment"
          sx={{
            marginTop: 1.5,
            background: "lightgray",
            borderRadius: `24px 24px 24px 24px`,
            "& fieldset": { border: "none" },
          }}
        />
      </CardContent>
      <button
        className="cancel-button-update-comment"
        onClick={() => cancelUpdate()}
      >
        cancel
      </button>
    </>
  );
};

export default UpdateComment;
