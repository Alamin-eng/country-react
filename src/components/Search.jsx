import React from "react";

const Search = ({ searchInput, setSearchInput, region, setRegion}) => {

  return (
    <div className="searchAndselect">
      <form>
        <input
          type="text"
          id="searchId"
          className="search-input shadow rounded form-control"
          placeholder="Search for a country ..."
          value={searchInput}
          onChange={setSearchInput}
        />
      </form>
      <select className="select rounded" value={region} onChange ={e => setRegion(e)} >
        <option value='all' >All continent</option>
        <option value='asia' >Asia</option>
        <option value='europe'>Europe</option>
        <option value='americas'>America</option>
        <option value='africa' >Africa</option>
        <option value='oceania'>Oceania</option>
      </select>
    </div> 
  );
};
export default Search;
