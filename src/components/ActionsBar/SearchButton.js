import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, IconButton, TextField } from "@mui/material";

const SearchButton = ({ setSearch }) => {
  const [s, setS] = useState("");
  const handleChange = (event) => {
    setS(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <TextField
      id="ssearch"
      label="Search"
      variant="standard"
      value={s}
      onChange={handleChange}
    />
  );
};

export default SearchButton;
