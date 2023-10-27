import React from "react";
import search from "./componentsCss/search.css";

function Search({ value, onChange }) {
  return (
    <>
      <div>
        {" "}
        {" "}
        <input placeholder="Search.." value={value} onChange={onChange} />
      </div>
    </>
  );
}

export default Search;
