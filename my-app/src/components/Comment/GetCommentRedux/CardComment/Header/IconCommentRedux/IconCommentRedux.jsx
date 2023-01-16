import React, { useState } from "react";
import Like from "./Icons/Like/Like";
import UnLike from "./Icons/Like/UnLike";
import CountLike from "./Icons/Like/CountLike";
import OptionsButton from "./Icons/OptionsButton/OptionsButton";
import MenuHeader from "./Menu/MenuHeader";
import { commentStore } from "../../../../../../store/addComment";

const IconCommentRedux = ({
  i,
  user,
  setOpenModalDeleteCommentRedux,
  setModalUpdateRedux,
  like,
  setLike,
  setModalLikeCommentRedux,
}) => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const addDeleteModal = () => {
    commentStore.addModalComment(i);
    setOpenModalDeleteCommentRedux(true);
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";

  return (
    <>
      <div className="icon-comments">
        {!like ? (
          <Like user={user} i={i} setLike={setLike} />
        ) : (
          <UnLike user={user} i={i} setLike={setLike} />
        )}
        <CountLike like={like} setModalLikeCommentRedux={setModalLikeCommentRedux} />

        <OptionsButton menuId={menuId} handleMenuOpen={handleMenuOpen} />

        <MenuHeader
          anchorEl={anchorEl}
          menuId={menuId}
          isMenuOpen={isMenuOpen}
          handleMenuClose={handleMenuClose}
          addDeleteModal={addDeleteModal}
          setModalUpdateRedux={setModalUpdateRedux}
        />
      </div>
    </>
  );
};

export default IconCommentRedux;
