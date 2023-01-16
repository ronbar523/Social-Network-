import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Box from "@mui/material/Box";
import { findPostsByCreatedBy } from "../../../../../services/postServices";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";


const MyPosts = ({ nickName }) => {

  const [myPosts, setMyPosts] = useState([]);
  const [countPosts, setCountPosts] = useState(6);
  const [morePost, setMorePost] = useState(true);
  const [buttonMore, setButtonMore] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const skip = 0;
    findPostsByCreatedBy(nickName, skip).then((res) => setMyPosts(res.data));
  }, []);

  const showMorePosts = useCallback(() => {
    if (myPosts.length === countPosts) {
      setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop + 10 >=
          document.documentElement.scrollHeight 
        ) {
          setLoading(true);
          setButtonMore(false);
          setCountPosts(countPosts + 6);
          const skip = countPosts;
          findPostsByCreatedBy(nickName, skip).then((res) =>
            setMyPosts(myPosts.concat(res.data))
          );
        } else {
          setLoading(false)
          setButtonMore(true)
        }
      }, 1000);
    } else {
      setMorePost(false);
      setLoading(false);
      setButtonMore(false);
    }
  }, [myPosts]);

  const showMorPostsByButton = useCallback(() => {
    if (myPosts.length === countPosts) {
      setTimeout(() => { 
        setLoading(true);
        setButtonMore(false);
        setCountPosts(countPosts + 6);
        const skip = countPosts;
        findPostsByCreatedBy(nickName, skip).then((res) =>
          setMyPosts(myPosts.concat(res.data))
        );       
      }, 1000);
    } else {
      setMorePost(false);
      setLoading(false);
      setButtonMore(false);
    }
  }, [myPosts])

  return (
    <>
      {myPosts.length > 0 ? (
        <InfiniteScroll
          dataLength={myPosts.length}
          next={showMorePosts}
          hasMore={morePost}
          className="user-post row justify-content-center"
        >
          {myPosts.map((item, index) => {
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
      
      {loading ? (
        <Box sx={{ display: "flex", mt: 3.5 }}>
          <CircularProgress sx={{ margin: "auto"  }} />
        </Box>
      ) : null}

      {buttonMore ? (
        <div className="">
          <button
            className="btn btn-secondary container d-block py-1 col-8  mt-5 mb-1"
            onClick={() => { showMorPostsByButton(); setLoading(true) }}
          >
            Show More
          </button>
        </div>
      ) : null}

      
    </>
  );
};

export default MyPosts;
