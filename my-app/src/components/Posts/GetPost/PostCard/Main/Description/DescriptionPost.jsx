import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";

const DescriptionPost = ({ strDescription, isLoadingDescription }) => {
  const [sliceRow, setSliceRow] = useState(3);

  return (
    <>
      {!isLoadingDescription ? (
        <CardContent >
          {strDescription.slice(0, sliceRow).map((item, index) => {
            return (
              <p className="desc-post" key={index}>
                {" "}
                {item
                // .match(/.{1,45}/g).join("-\n")
                }{" "}
              </p>
            );
          })}
          {sliceRow < 4 && strDescription.length >= 4 ? (
            <button
              className="desc-post show-more-btn"
              onClick={() => setSliceRow(strDescription.length)}
            >
              {" "}
              Read More..{" "}
            </button>
          ) : sliceRow >= 4 && strDescription.length === sliceRow ? (
            <button
              className="desc-post show-more-btn mt-3"
              onClick={() => setSliceRow(3)}
            >
              {" "}
              Read Less..{" "}
            </button>
          ) : null}
        </CardContent>
      ) : null}
    </>
  );
};

export default DescriptionPost;
