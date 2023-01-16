import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { postLikeStore } from "../../../../../../store/PostLike";


const Back = ({ setShowArr, disableBack, setDisableBack, setDisableNext }) => {

  const back = useCallback(() => {
    postLikeStore.x = postLikeStore.x - 1;
    if (postLikeStore.x === 0) {
      setDisableBack(true);
    }
    setShowArr(postLikeStore.likes[postLikeStore.x]);
    setDisableNext(false);
  }, []);

  return (
    <>
      <Button
        sx={{
          height: 35,
          marginRight: 1,
        }}
        disabled={disableBack}
        onClick={() => back()}
        variant="outlined"
      >
        <NavigateBeforeIcon />
      </Button>
    </>
  );
};

export default Back;
