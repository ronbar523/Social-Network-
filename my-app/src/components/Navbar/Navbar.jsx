import React, { useState, useEffect } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import {
  findUserById,
  findUsers,
  getCurrentUser,
} from "../../services/usersServices";


import Logo from './LeftSide/Logo';
import Search from "./LeftSide/Search";
import Middle from './Middle/Middle';

import DesktopMenu from './RightSide/DesktopMenu';
import MobileMenu from './RightSide/MobileMenu';
import ModalSearch from './LeftSide/ModalSearch/ModalSearch';


const Navbar = ({ closeModal, setCloseModal, searchBar, setSearchBar }) => {
  const user = getCurrentUser();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const [userPhoto, setUserPhoto] = useState("");

  useEffect(() => {
    if (user) {
      findUserById(user?._id).then((res) => {
        setUserPhoto(res.data.photo);
      });
    }
  }, []);

  const [allUsers, SetAllUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const firstName = filter;
    const lastName = filter;
    const nickName = filter;
    const fullName = filter;

    findUsers(firstName, lastName, nickName, fullName).then((res) =>
      SetAllUsers(res.data)
    );
    setCloseModal(false);
  }, [filter]);

  const searchUser = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 8 }}>
        <AppBar sx={{ height: "70px" }}>
          <Toolbar>
            {/* Left Side */}
            <Logo />

            <Search
              closeModal={closeModal}
              setCloseModal={setCloseModal}
              filter={filter}
              searchUser={searchUser}
            />

            {/* Middle */}
            <Middle />

            {/* Right Side */}
            <DesktopMenu
              user={user}
              userPhoto={userPhoto}
              anchorEl={anchorEl}
              isMenuOpen={isMenuOpen}
              handleProfileMenuOpen={handleProfileMenuOpen}
              handleMenuClose={handleMenuClose}
            />

            <MobileMenu
              user={user}
              userPhoto={userPhoto}
              mobileMoreAnchorEl={mobileMoreAnchorEl}
              isMobileMenuOpen={isMobileMenuOpen}
              handleProfileMenuOpen={handleProfileMenuOpen}
              handleMobileMenuClose={handleMobileMenuClose}
              handleMobileMenuOpen={handleMobileMenuOpen}
            />
          </Toolbar>

          <ModalSearch
            allUsers={allUsers}
            filter={filter}
            closeModal={closeModal}
            setCloseModal={setCloseModal}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
        </AppBar>
      </Box>
    </>
  );
};
 
export default Navbar;
