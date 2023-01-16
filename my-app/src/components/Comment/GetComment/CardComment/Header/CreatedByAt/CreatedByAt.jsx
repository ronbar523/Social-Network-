import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const CreatedByAt = ({ comment, dateNow }) => {
  const sec = useMemo(() => {
    return (dateNow - comment.createdAt) / 1000;
  }, [dateNow]);

  return (
    <>
      <div>
        <Link
          to={`/user_profile/${comment.createdByName}`}
          className=" text-decoration-none text-dark"
        >
          <p className="created-by-comment">{comment.createdByName}</p>
        </Link>
        <p className="created-at-comment">
          {sec < 60
            ? sec.toFixed(0) + " sec"
            : sec < 3600
            ? (sec / 60).toFixed(0) + " min"
            : sec < 86_400
            ? (sec / 3600).toFixed(0) + " hour"
            : sec < 2_592_000
            ? (sec / 86_400).toFixed(0) + " day"
            : comment.date}
        </p>
      </div>
    </>
  );
};

export default CreatedByAt;
