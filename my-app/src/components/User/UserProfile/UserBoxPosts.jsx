import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserBoxPosts = ({ userProfile }) => {
  return (
    <>
      <Box
        component="span"
        sx={{
          p: 0.1,
          width: "68px",
          mt: "-4px",
          ml: 0.5,
          height: "55px",
          border: "1px solid lightGray",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            textAlign: "center",
            color: "blue",
          }}
        >
          {userProfile.countPost}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            marginTop: "-8px",
            color: "blue",
          }}
        >
          Posts
        </Typography>
      </Box>
    </>
  );
};

export default UserBoxPosts;
