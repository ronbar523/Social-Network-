import React from "react";
import DescriptionPost from "./Description/DescriptionPost";
import PhotoPost from "./Photo/PhotoPost";


const MainPost = ({ item, strDescription, isLoadingDescription }) => {
  return (
    <>
      <DescriptionPost strDescription={strDescription} isLoadingDescription={isLoadingDescription} />
      <PhotoPost item={item} />
    </>
  );
};

export default MainPost;
