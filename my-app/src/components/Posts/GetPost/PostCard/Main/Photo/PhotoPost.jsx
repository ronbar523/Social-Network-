import React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const PhotoPost = ({ item }) => {
  return (
    <>
      <CardContent
        // sx={{
        //   marginLeft: "70px",
        //   marginRight: "70px",
        //   height: "24vw",
        //   background: "lightgray",
        //   marginTop: "-15px",
        // }}
        className="container-photo"
      >
        <CardMedia
          component="img"
          className="photo-post"
          image={item.media}
          // alt="Paella dish"
        />
      </CardContent>
    </>
  );
};

export default PhotoPost;
