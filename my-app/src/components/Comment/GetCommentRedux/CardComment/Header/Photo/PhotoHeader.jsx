import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import { findUserById } from "../../../../../../services/usersServices";
import { Link } from "react-router-dom";

const PhotoHeader = ({ user }) => {
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await findUserById(user._id).then((res) =>
          setUserPhoto(res.data.photo)
        );
      } catch {
        toast.error(`Something happened`);
      }
    };
    fetchData().catch();
  }, []);

  return (
    <>
      <Link
        to={`/my_profile/${user.nickName}`}
      >
        <Avatar
          alt={user.nickName}
          src={userPhoto}
          aria-label="recipe"
          className="created-by-photo-comment"
          sx={{ width: 44, height: 44 }}
        ></Avatar>
      </Link>
    </>
  );
};

export default PhotoHeader;
