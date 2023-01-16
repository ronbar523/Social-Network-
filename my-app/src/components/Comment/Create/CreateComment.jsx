import React from "react";
import TextFieldComment from "./TextField/TextFieldComment";
import CardContent from "@mui/material/CardContent";

const CreateComment = ({
  user,
  item,
  isLoading,
  setIsLoading,
  setModalLogin,
}) => {
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
        <TextFieldComment
          user={user}
          item={item}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          setModalLogin={setModalLogin}
        />
      </CardContent>
    </>
  );
};

export default CreateComment;
