import React, { useState, useEffect } from "react";
import Main from "./Main";
import Search from "./Search";

 //Home function
  function Home() {
    const [allCountries, setAllCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterRegion, setFilterRegion] = useState("all");

    //Handle search
    function handleSearch(e) {
      setSearchTerm(e.target.value);
    }
    // Handle region set
    function handleregion(e) {
      setFilterRegion(e.target.value);
    }
    useEffect(() => {
      fetch("https://restcountries.com/v2/all")
        .then((res) => res.json())
        .then((data) => {
          setAllCountries(data);
          console.log(data);
        });
    }, []);
    return (
      <div>
        <Search
          searchInput={searchTerm}
          setSearchInput={handleSearch}
          region={filterRegion}
          setRegion={handleregion}
        />
        <hr></hr>
        <Main
          data={allCountries}
          searchInput={searchTerm}
          regionInput={filterRegion}
        />
        
      </div>
    );
  }

  export default Home;