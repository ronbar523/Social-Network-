import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import DesktopMenuOpen from "./MenuOpen/DesktopMenuOpen";

const DesktopMenu = ({
  user,
  handleProfileMenuOpen,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
  userPhoto,
}) => {


  const menuId = "primary-search-account-menu";

  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex" }}}>
        <IconButton size="large" color="inherit">
          <HomeIcon />
        </IconButton>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={2} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        {user ? (
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar src={userPhoto} />
          </IconButton>
        ) : (
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Typography sx={{ mt: "2px", mr: "5px" }}> Account </Typography>
            <PermIdentityIcon />
          </IconButton>
        )}
      </Box>
      {
        <DesktopMenuOpen
          user={user}
          anchorEl={anchorEl}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
          menuId={menuId}
        />
      }
    </>
  );
};

export default DesktopMenu;
