import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";

const Date = ({
  date,
  setDate,
  validDate,
  setValidDate,
  dateFocus,
  setDateFocus,
  young,
  setYoung,
  old,
  setOld,
}) => {

  useEffect(() => {
    let result = false;
    if (date.length > 0) {
      result = true;
    } else if(date.length === 0){
      setYoung(false);
      setOld(false);
    }
    const year = date.split("-");

    if (year[0] > 0) {

      if (year[0] > 2015 && year[0] < 2023 && year[0] > 1900 )  {
        setYoung(true);
      } else if (year[0] <= 1900 || year[0] >= 2023) {
        setOld(true);
      } else {
        setYoung(false);
        setOld(false);
      }
    }
    setValidDate(result);
  }, [date]);


  return (
    <div>
      <TextField
        required
        id="outlined-required"
        size="small"
        type={"date"}
        sx={{
          width: "140px",
        }}
        value={date}
        error={young || old || (!validDate && !dateFocus)}
        onChange={(e) => setDate(e.target.value)}
        onFocus={() => setDateFocus(true)}
        onBlur={() => setDateFocus(false)}
        helperText={
          young ? "You young" : old ? "Are you sure?" : "Your birthday"
        }
      />
    </div>
  );
};

export default Date;
