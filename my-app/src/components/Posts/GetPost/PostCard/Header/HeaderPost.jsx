import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { postStore } from "../../../../../store/addPost";
import OptionsButton from "./OptionsButton/OptionsButton";
import MenuHeader from "./Menu/MenuHeader";

const HeaderPost = ({
  user,
  item,
  sec,
  setOpenModalDeletePost,
  setOpenModalUpdate,
}) => {

  const [nickName, setNickName] = useState("")
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const addModalPost = () => {
    postStore.addModalPostUpdate(item)
    setOpenModalUpdate(true)
    handleMenuClose();
  }

  const addDeleteModal = () => {
    postStore.addModalPost(item);
    setOpenModalDeletePost(true);
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";

  useEffect(() => {
    const createdBy = item.createdByName.split(" ")
    setNickName(createdBy[0]);
  }, [])

  return (
    <>
      <CardHeader
        avatar={
          <Link 
          to={`/user_profile/${nickName}`}>
            <Avatar
              alt={item.alt}
              src={item.userMedia}
              aria-label="recipe"
            ></Avatar>
          </Link>
        }
        title={
          <Link
            to={`/user_profile/${nickName}`}
            className="text-decoration-none text-dark"
          >
            {item.createdByName}
          </Link>
        }
        subheader={
          item.countLikes !== undefined
            ? sec < 60
              ? sec.toFixed(0) + " sec"
              : sec < 3600
              ? (sec / 60).toFixed(0) + " min"
              : sec < 86_400
              ? (sec / 3600).toFixed(0) + " hour"
              : sec < 2_592_000
              ? (sec / 86_400).toFixed(0) + " day"
              : item.date
            : "now"
        }
        action={
          <OptionsButton handleMenuOpen={handleMenuOpen} menuId={menuId} />
        }
      />

      <MenuHeader
        user={user}
        item={item}
        anchorEl={anchorEl}
        menuId={menuId}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
        addDeleteModal={addDeleteModal}
        addModalPost={addModalPost}
      />
    </>
  );
};

export default HeaderPost;
