import React from "react";


const SearchBox = (props) => {
  return (
    <div>
      <input
        className="form-control"
        placeholder="Search Movies from our API Hear"
        value={props.value}
        onChange={(event) => props.setSearchFilm(event.target.value)}
      />



    </div>

    //
    
    //
  );
};

export default SearchBox;
