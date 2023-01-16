import React, { useEffect, useState } from "react";
import ProfileLink from "../Buttons/ProfileLink"
import UnFollow from "../Buttons/UnFollow";
import Follow from "../Buttons/Follow";
import { postLikeStore } from "../../../../../../store/PostLike";

const Main = ({ user, item }) => {
  const [follow, setFollow] = useState(false);
  const [myUser, setMyUser] = useState(false);

  useEffect(() => {
    if (user) {
      if (item._id === user?._id) {
        return setMyUser(true);
      } else if (item.followers.length > 0) {
        item.followers.forEach((i) => {
          if (i === user?._id) {
            return setFollow(true);
          }
        });
      }

      if(postLikeStore.newFollow.length > 0){
        postLikeStore.newFollow.forEach((i) => {
          if(i._id === item._id){
            return setFollow(true);
          }
        })
      }

      if (postLikeStore.unFollow.length > 0) {
        postLikeStore.unFollow.forEach((i) => {
          if (i._id === item._id) {
            return setFollow(false);
          }
        });
      }
    }
  }, []);


  return (
    <>
      <div className="users-modal">
        <ProfileLink item={item} />
        {user && !follow && !myUser ? (
          <Follow user={user} item={item} setFollow={setFollow} />
        ) : user && follow && !myUser ? (
          <UnFollow user={user} item={item} setFollow={setFollow} />
        ) : null}
      </div>
    </>
  );
};
 
export default Main;