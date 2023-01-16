import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const EditProfileButton = () => {
  return (
    <Grid item sx={{ display: "inline-flex", ml: 0.5 }}>
      <Link to="/update_user_info" className="text-decoration-none text-dark">
        <Button
          sx={{ width: "220px" }}
          variant="outlined"
        >
          Edit Profile
        </Button>
      </Link>
    </Grid>
  );
};

export default EditProfileButton;
