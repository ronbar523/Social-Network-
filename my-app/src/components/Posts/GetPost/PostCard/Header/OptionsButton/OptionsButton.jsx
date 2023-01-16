import React from "react";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

const OptionsButton = ({ handleMenuOpen, menuId }) => {
  return (
    <>
      <IconButton
        aria-label="Example"
        size="large"
        edge="end"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleMenuOpen}
        sx={{
          marginRight: "10px",
          fontSize: "24px",
        }}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
    </>
  );
};

export default OptionsButton;
