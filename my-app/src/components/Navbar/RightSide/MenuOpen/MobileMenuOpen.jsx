import React from "react";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";


const MobileMenuOpen = ({
  user,
  userPhoto,
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen,
  mobileMenuId,
}) => {
  return (
    <>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          mt: "25px",
          ml: "-18px",
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <Link
          to={`/my_profile/${user?.nickName}`}
          className="text-decoration-none text-dark"
        >
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                src={userPhoto}
                sx={{
                  width: "30px",
                  height: "30px",
                }}
              />{" "}
            </IconButton>
            <p className="mt-3">
              
                {" "}
                Profile
            </p>
          </MenuItem>
        </Link>

        <MenuItem sx={{ mt: "-15px" }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </Badge>
          </IconButton>
          <p className="mt-3">Messages</p>
        </MenuItem>
        <MenuItem sx={{ mt: "-15px" }}>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon
                sx={{
                  width: "25px",
                  height: "25px",
                }}
              />
            </Badge>
          </IconButton>
          <p className="mt-3">Notifications</p>
        </MenuItem>
      </Menu>
    </>
  );
};

export default MobileMenuOpen;
