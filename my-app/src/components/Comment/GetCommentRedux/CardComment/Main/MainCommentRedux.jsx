import React from "react";
import CardContent from "@mui/material/CardContent";

const MainCommentRedux = ({ i }) => {
  return (
    <>
      <CardContent >
        <p className="desc-comment-redux">{i.description}</p>
      </CardContent>
    </>
  );
};
 
export default MainCommentRedux;