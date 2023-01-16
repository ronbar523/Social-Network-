import React, { useState } from "react";
import Like from "./Icons/Like/Like";
import UnLike from "./Icons/Like/UnLike";
import CountLike from "./Icons/Like/CountLike";
import OptionsButton from "./Icons/OptionsButton/OptionsButton";
import MenuHeader from "./Menu/MenuHeader";
import { commentStore } from "../../../../../../store/addComment";

const IconComment = ({
  user,
  comment,
  like,
  setLike,
  setModalUpdate,
  countLikes,
  setCountLikes,
  setOpenModalDeleteComment,
  setModalLikeComment,
  isLoading,
  setModalLogin,
  setIsLoading,
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
    commentStore.addModalComment(comment);
    setOpenModalDeleteComment(true);
    handleMenuClose();
  };

  const menuId = "primary-search-account-menu";

  return (
    <>
      <div className="icon-comments">
        {!like ? (
          <Like
            user={user}
            comment={comment}
            setLike={setLike}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
            setModalLogin={setModalLogin}
            setIsLoading={setIsLoading}
          />
        ) : (
          <UnLike
            user={user}
            comment={comment}
            setLike={setLike}
            countLikes={countLikes}
            setCountLikes={setCountLikes}
            setIsLoading={setIsLoading}
          />
        )}

        {!isLoading ? (
          <CountLike
            user={user}
            comment={comment}
            like={like}
            countLikes={countLikes}
            setModalLikeComment={setModalLikeComment}
          />
        ) : null}

        <OptionsButton menuId={menuId} handleMenuOpen={handleMenuOpen} />

        {user?._id === comment.createdBy ? (
          <MenuHeader
            anchorEl={anchorEl}
            menuId={menuId}
            isMenuOpen={isMenuOpen}
            handleMenuClose={handleMenuClose}
            addDeleteModal={addDeleteModal}
            setModalUpdate={setModalUpdate}
          />
        ) : null}
      </div>
    </>
  );
};

export default IconComment;
