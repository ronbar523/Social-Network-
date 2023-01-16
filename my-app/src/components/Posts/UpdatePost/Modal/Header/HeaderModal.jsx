import React from "react";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";


const HeaderModal = ({ user, i, cancelUpdate }) => {
  return (
    <>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              height: 40,
              width: 40,
              marginTop: "-3px",
            }}
            aria-label="recipe"
            alt={i.createdByName}
            src={user.photo}
          />
        }
        action={
          <IconButton
            sx={{
              width: 30,
              height: 30,
              marginTop: "5px",
              marginRight: "5px",
            }}
            onClick={() => cancelUpdate()}
          >
            <CloseIcon sx={{ fontSize: "30px", color: "black" }} />
          </IconButton>
        }
      />
    </>
  );
};

export default HeaderModal;
