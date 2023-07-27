import React from "react";

function Search({ value, onChange }) {
  return (
    <>
      <div>
        {" "}
        filter for{" "}
        <input placeholder="Search.." value={value} onChange={onChange} />
      </div>
    </>
  );
}

export default Search;
