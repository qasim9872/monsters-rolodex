import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ handleChange, placeholder }) => (
  <input
    class="search"
    type="search"
    placeholder={placeholder}
    onChange={(e) => handleChange(e.target.value)}
  />
);
