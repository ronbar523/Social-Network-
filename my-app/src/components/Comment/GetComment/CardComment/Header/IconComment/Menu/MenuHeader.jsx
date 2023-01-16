import React from "react";
import Menu from "@mui/material/Menu";
import Edit from "./Edit/Edit";
import Delete from "./Delete/Delete";

const MenuHeader = ({
  anchorEl,
  menuId,
  isMenuOpen,
  handleMenuClose,
  addDeleteModal,
  setModalUpdate
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
        <Edit setModalUpdate={setModalUpdate} />
        <Delete addDeleteModal={addDeleteModal} />
      </Menu>
    </>
  );
};

export default MenuHeader;
