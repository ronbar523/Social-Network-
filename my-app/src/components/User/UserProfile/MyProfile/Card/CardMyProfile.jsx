import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MyNickName from "./Name/MyNickName";
import MyFullName from "./Name/MyFullName";
import MyPostsBox from "./PostsBox/MyPostsBox";
import MyFollowersBox from "./FollowersBox/MyFollowersBox";
import MyFollowingBox from "./FollowingBox/MyFollowingBox";
import { findUserById } from "../../../../../services/usersServices";
import MyPhoto from "./Photo/MyPhoto";
import EditProfileButton from "./EditProfileButton/EditProfileButton";

const CardMyProfile = ({ user }) => {

  const [myProfile, setMyProfile] = useState([]);
  const [myFollowing, setMyFollowing] = useState([]);
  const [myFollowers, setMyFollowers] = useState([]);

  useEffect(() => {
    findUserById(user?._id).then((res) => {
      setMyProfile(res.data);
      setMyFollowing(res.data.following);
      setMyFollowers(res.data.followers);
    });
  }, []);

  return (
    <>
      <Paper
        className="card-profile"
        sx={{
          p: 2,
          margin: "auto",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <MyPhoto myProfile={myProfile} />

          <Grid item>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <MyNickName myProfile={myProfile} />
                <MyFullName myProfile={myProfile} />

                <Grid item sx={{ display: "inline-flex" }}>
                  <MyPostsBox myProfile={myProfile} />
                  <MyFollowersBox myFollowers={myFollowers} />
                  <MyFollowingBox myFollowing={myFollowing} />
                </Grid>
              </Grid>
              <EditProfileButton />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CardMyProfile;
