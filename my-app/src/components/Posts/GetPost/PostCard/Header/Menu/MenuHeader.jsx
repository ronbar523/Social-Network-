import React from "react";
import Menu from "@mui/material/Menu";
import Edit from "./MenuOptions/Edit";
import Delete from "./MenuOptions/Delete";

const MenuHeader = ({
  user,
  item,
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  addDeleteModal,
  addModalPost,
}) => {
  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id={menuId}
        keepMounted
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
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
        {user?._id === item.createdBy ? (
          <div>
            <Edit addModalPost={addModalPost} />

            <Delete addDeleteModal={addDeleteModal} />
          </div>
        ) : null}
      </Menu>
    </>
  );
};

export default MenuHeader;
