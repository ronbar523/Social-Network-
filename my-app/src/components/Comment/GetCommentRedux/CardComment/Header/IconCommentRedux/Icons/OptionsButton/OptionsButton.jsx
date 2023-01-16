import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";

const OptionsButton = ({ menuId, handleMenuOpen }) => {

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
          marginTop: "-10px",
          fontSize: "22px",
        }}
      >
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
    </>
  );
};

export default OptionsButton;
