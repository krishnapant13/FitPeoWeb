import React from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { InputAdornment, TextField } from "@mui/material";

const FPSearchBar = () => {
  const handleSearch = (event) => {
    // const query = event.target.value;
    // onSearch(query);
  };
  return (
    <div>
      <TextField
        placeholder="Search"
        sx={{
          backgroundColor: "white",
          "& .MuiInputBase-input": {
            border: "none",
            padding: "0.3em",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
        onChange={handleSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PiMagnifyingGlassBold size={20} />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default FPSearchBar;
