import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const ProfileLink = ({ item }) => {
  return (
    <>
      <button
        onClick={() =>
          window.location.replace(`/user_profile/${item.nickName}`)
        }
        className="like-post-modal"
      >
        <CardHeader
          avatar={<Avatar src={item.photo} aria-label="recipe"></Avatar>}
          title={<Typography> {item.nickName} </Typography>}
        />
      </button>
    </>
  );
};

export default ProfileLink;
