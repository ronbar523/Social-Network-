import React from "react";
import Menu from "@mui/material/Menu";
import LogoutLink from "./Links/UserPage/LogoutLink";
import UserProfileLink from "./Links/UserPage/UserProfileLink";
import UpdateUserInfoLink from "./Links/UserPage/UpdateUserLink";
import RegisterLink from "./Links/NewMemberPage/RegisterLink";
import LoginLink from "./Links/NewMemberPage/LoginLink";


const DesktopMenuOpen = ({
  user,
  menuId,
  anchorEl,
  isMenuOpen,
  handleMenuClose,
}) => {

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          mt: "40px",
          ml: "-18px",
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        {user ? <UserProfileLink user={user} handleMenuClose={handleMenuClose} /> : null}
        {user ? <UpdateUserInfoLink handleMenuClose={handleMenuClose} /> : null}
        {user ? <LogoutLink handleMenuClose={handleMenuClose}/> : null}

        {!user ? <RegisterLink handleMenuClose={handleMenuClose} /> : null}
        {!user ? <LoginLink  handleMenuClose={handleMenuClose} /> : null}
        
      </Menu>
    </>
  );
};

export default DesktopMenuOpen;
