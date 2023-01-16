import React, { useEffect } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";

const Gender = ({
  gender,
  setGender,
  validGender,
  setValidGender,
  genderFocus,
  setGenderFocus,
}) => {

  useEffect(() => {
    let result = false;
    if (gender.length > 0) {
      result = true;
    }
    setValidGender(result);
  }, [gender]);


  return (
    <div className="gender">
      <FormControl required size="small" sx={{ width: 140 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={gender}
          label="Gender"
          error={!validGender && !genderFocus}
          onChange={(e) => setGender(e.target.value)}
          onFocus={() => setGenderFocus(true)}
          onBlur={() => setGenderFocus(false)}
        >
          <MenuItem>
            <em value={"None"}>None</em>
          </MenuItem>
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Free Spirit"}>Free Spirit</MenuItem>
        </Select>
        <FormHelperText>Your gender</FormHelperText>
      </FormControl>
    </div>
  );
};

export default Gender;
