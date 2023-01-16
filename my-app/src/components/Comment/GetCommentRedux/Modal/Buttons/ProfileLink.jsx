import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ProfileLink = ({ user }) => {
  return (
    <>
      <button
        onClick={() => window.location.replace(`/my_profile/${user.nickName}`)}
        className="like-post-modal"
      >
        <CardHeader
          avatar={<Avatar src={user.photo} aria-label="recipe"></Avatar>}
          title={<Typography> {user.nickName} </Typography>}
        />
      </button>
    </>
  );
};

export default ProfileLink;
