import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const PhotoHeader = ({ comment }) => {
  return (
    <>
      <Link to={`/user_profile/${comment.createdByName}`}>
        <Avatar
          alt={comment.createdByName}
          src={comment.userPhoto}
          aria-label="recipe"
          className="created-by-photo-comment"
          sx={{ width: 44, height: 44 }}
        ></Avatar>
      </Link>
    </>
  );
};

export default PhotoHeader;
