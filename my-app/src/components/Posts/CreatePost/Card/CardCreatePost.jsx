import React from "react";
import Card from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

const CardCreatePost = ({ setModalCreatePost, createdByName, userMedia }) => {
  return (
    <>
      <Card
        className="cards"
        sx={{
          display: "flex",
          borderRadius: "10px",
        }}
      >
        <TextField
          placeholder="Write something"
          id="outlined-start-adornment"
          className="input-create-post"
          sx={{
            marginTop: 2,
            marginBottom: 2,
          }}
          onClick={() => setModalCreatePost(true)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Avatar
                  alt={createdByName}
                  src={userMedia}
                  sx={{ width: 44, height: 44, marginRight: 1.5 }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Card>
    </>
  );
};

export default CardCreatePost;
