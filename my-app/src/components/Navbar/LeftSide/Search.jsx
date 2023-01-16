import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";


const Search = ({ searchUser }) => {
  

  return (
    <>
      <Paper
        component="form"
        className="textfield-search-user"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          height: 35,
          background: "#c7dbef",
        }}
      >
        <IconButton type="button" sx={{ p: "6px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 0.5, flex: 1 }}       
          placeholder="Search"
          onChange={(e) => {
            searchUser(e);
          }}
        />
      </Paper>
    </>
  );
};

export default Search;
