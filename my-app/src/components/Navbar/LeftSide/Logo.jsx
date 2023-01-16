import React from "react";
import Typography from "@mui/material/Typography";

const Logo = () => {


  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".2rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Peti
      </Typography>
    </>
  );
};

export default Logo;
