import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import { updateByCreatedAt } from "../../../../services/commentServices";
import { commentStore } from "../../../../store/addComment";

const UpdateCommentRedux = ({ user, i, setModalUpdateRedux }) => {

  const [description, setDescription] = useState(i.description);

  const cancelUpdate = () => {
    setDescription(i.description);
    setModalUpdateRedux(false);
  }; 


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
      if (i.description !== description){
        const comment = {
          description: description,
        };
        const createdAt = i.createdAt;
        const createdBy = user._id;
        await updateByCreatedAt(createdAt,   createdBy, comment);
        commentStore.comments.forEach((item) => {
          if (item.createdAt === i.createdAt) {
            item.description = description;
          }
        });
        setModalUpdateRedux(false);
      } else {
        setModalUpdateRedux(false);
      }
    } catch {
      toast.error(`Something happened`);
      setModalUpdateRedux(false);
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

export default UpdateCommentRedux;
