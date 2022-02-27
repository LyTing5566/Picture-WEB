import React from "react";

const Search = ({ search, setIntput }) => {
  const inputHandler = (e) => {
    setIntput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
