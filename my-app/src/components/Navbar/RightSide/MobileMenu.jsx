import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MoreIcon from "@mui/icons-material/MoreVert";
import MobileMenuOpen from "./MenuOpen/MobileMenuOpen";


const MobileMenu = ({
  user,
  userPhoto,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleProfileMenuOpen,
  handleMobileMenuClose,
  handleMobileMenuOpen,
}) => {

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" }}}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {
        <MobileMenuOpen
          user={user}
          userPhoto={userPhoto}
          mobileMoreAnchorEl={mobileMoreAnchorEl}
          isMobileMenuOpen={isMobileMenuOpen}
          handleProfileMenuOpen={handleProfileMenuOpen}
          handleMobileMenuClose={handleMobileMenuClose}
          mobileMenuId={mobileMenuId}
        />
      }
    </>
  );
};

export default MobileMenu;
