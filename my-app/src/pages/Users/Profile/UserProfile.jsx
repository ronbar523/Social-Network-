import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import {
  findUserByNickName,
  getCurrentUser,
  makeFollow,
  sendUnFollow,
} from "../../../services/usersServices";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

import Navbar from "../../../components/Navbar/Navbar"
import UserPhoto from "../../../components/User/UserProfile/UserPhoto";
import UserFullName from "../../../components/User/UserProfile/UserFullName";
import UserNickName from "../../../components/User/UserProfile/UserNickName";
import UserBoxPosts from "../../../components/User/UserProfile/UserBoxPosts";
import UserBoxFollowers from "../../../components/User/UserProfile/UserBoxFollowers";
import UserBoxFollowing from "../../../components/User/UserProfile/UserBoxFollowing";

import UserPosts from "../../../components/User/UserProfile/UserPosts/UserPosts";



const UserProfile = () => {

  const user = getCurrentUser()

  
  const [userProfile, setUserProfile] = useState("");
  const [followers, setFollowers] = useState([]);
  const [userFollower, setUserFollower] = useState(false);
  const [following, setFollowing] = useState([]);

  const url = window.location.href;
  const urlWordsArr = url.split("/");

  const nickName = useMemo(() => {
    return urlWordsArr[urlWordsArr.length - 1];
  }, []);

  useEffect(() => {
    if(user?.nickName !== nickName) {
      findUserByNickName(nickName).then((res) => {
        setUserProfile(res.data[0]);
        setFollowers(res.data[0].followers);
        setFollowing(res.data[0].following); 
      });
    } else {
      window.location = `/my_profile/${nickName}`
    }
  }, [userFollower]);
  
  useEffect(() => {
    if(user?.nickName !== nickName){
      followers.forEach((item) => {
        if (item === user?._id) {
          setUserFollower(true);
        }
      });
    }
  }, [followers]);

  const SendFollow = useCallback(async () => {
    try {
      const follow = {
        id: userProfile._id,
        myId: user?._id,
      };
      await makeFollow(nickName, follow);
      setUserFollower(true);
    } catch {
      toast.error(`Something happened`);
    }
  }, [followers]);

  const SendUnFollow = useCallback(async () => {
    try {
      const unFollow = {
        id: userProfile._id,
        myId: user?._id,
      };
      await sendUnFollow(nickName, unFollow);
      setUserFollower(false);
    } catch {
      toast.error(`Something happened`);
    }
  }, [followers]);

  const [closeModal, setCloseModal] = useState(false);



  return (
    <>
      <header>
        <Navbar closeModal={closeModal} setCloseModal={setCloseModal} />
      </header>
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
          <UserPhoto userProfile={userProfile} />

          <Grid item>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <UserNickName userProfile={userProfile} />
                <UserFullName userProfile={userProfile} />

                <Grid item sx={{ display: "inline-flex" }}>
                  <UserBoxPosts userProfile={userProfile} />

                  <UserBoxFollowers followers={followers} />

                  <UserBoxFollowing following={following} />
                </Grid>
              </Grid>
              <Grid item sx={{ display: "inline-flex", ml: 0.5 }}>
                {!user ? (
                  <Button
                    sx={{ width: "105px" }}
                    variant="outlined"
                    disabled
                    onClick={() => SendFollow()}
                  >
                    Follow
                  </Button>
                ) : userProfile._id !== user?._id && !userFollower ? (
                  <Button
                    sx={{ width: "105px" }}
                    variant="outlined"
                    onClick={() => SendFollow()}
                  >
                    Follow
                  </Button>
                ) : userProfile._id !== user?._id && userFollower ? (
                  <Button
                    sx={{ width: "115px" }}
                    variant="outlined"
                    onClick={() => SendUnFollow()}
                  >
                    UnFollow
                  </Button>
                ) : null}
                {user ? (
                  <Button
                    sx={{ width: "113px", ml: 0.5 }}
                    variant="contained"
                  >
                    Message
                  </Button>
                ) : (
                  <Button
                    sx={{ width: "113px", ml: 0.5 }}
                    variant="contained"
                    disabled
                  >
                    Message
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <UserPosts nickName={nickName} />
    </>
  );
};

export default UserProfile;


