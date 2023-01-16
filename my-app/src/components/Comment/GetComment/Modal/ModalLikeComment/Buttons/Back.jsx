import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { commentLikeStore } from "../../../../../../store/CommentLike";


const Back = ({ setShowArr, disableBack, setDisableBack, setDisableNext }) => {

  const back = useCallback(() => {
    commentLikeStore.x = commentLikeStore.x - 1;
    if (commentLikeStore.x === 0) {
      setDisableBack(true);
    }
    setShowArr(commentLikeStore.likes[commentLikeStore.x]);
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
