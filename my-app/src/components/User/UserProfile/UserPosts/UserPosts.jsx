import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import IconButton from "@mui/material/IconButton";import { findPostsByCreatedBy } from "../../../../services/postServices";

const UserPosts = ({ nickName }) => {

  const [userPosts, setUserPosts] = useState([]);
  const [countPosts, setCountPosts] = useState(6);
  const [morePost, setMorePost] = useState(true);

  useEffect(() => {
    const skip = 0;
    findPostsByCreatedBy(nickName, skip).then((res) => setUserPosts(res.data));
  }, []);
  
  const showMorePosts = useCallback(() => {
    if (userPosts.length === countPosts) {
      setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
        ) {
          setCountPosts(countPosts + 6);
          const skip = countPosts;
          findPostsByCreatedBy(nickName, skip).then((res) =>
            setUserPosts(userPosts.concat(res.data))
          );
        }
      }, 1000);
    } else {
      setMorePost(false);
    }
  }, [userPosts]);

  return (
    <>
      {userPosts.length > 0 ? (
        <InfiniteScroll
          dataLength={userPosts.length}
          next={showMorePosts}
          hasMore={morePost}
          loader={<p>Loading More</p>}
          endMessage={<p>all</p>}
          className="user-post row justify-content-center"
        >
          {userPosts.map((item, index) => {
            return (
              <div className="col-4 col-md-4 col-lg-4 mx-0 mb-4" key={index}>
                <IconButton
                  onClick={() =>
                    window.location.replace(`/post_page/${item._id}`)
                  }
                >
                  <img
                    className="image-post"
                    // alt={item.title}
                    src={item.media}
                  />
                </IconButton>
              </div>
            );
          })}
        </InfiniteScroll>
      ) : null}
    </>
  );
};

export default UserPosts;
