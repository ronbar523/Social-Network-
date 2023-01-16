import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UserBoxFollowing = ({ following }) => {
  return (
    <>
      <Box
        component="span"
        sx={{
          ml: 1,
          p: 0.1,
          mt: "-4px",
          width: "68px",
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
          {following.length}
        </Typography>
        <Typography
          sx={{
            fontSize: "13px",
            textAlign: "center",
            marginTop: "-8px",
            color: "blue",
          }}
        >
          Following
        </Typography>
      </Box>
    </>
  );
};

export default UserBoxFollowing;
