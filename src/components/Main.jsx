import React from 'react';
import { Link } from "react-router-dom";

function Main({ data, searchInput,regionInput, index }) {
  
  const dataManipulation = data
    .filter((e) => (e.name && e.name.toLowerCase().includes(searchInput.toLowerCase())) || 
    (e.capital && e.capital.toLowerCase().includes(searchInput.toLowerCase()))) // needed to wrap both || conditions inside parenthesis to work both together at the same time. If use without wraping then it does not work , and only one of them either name or capital search works
    .filter((e) => regionInput === 'all' || (e.region && e.region.toLowerCase() === regionInput.toLowerCase()))

  return (
    <div className="mainDiv" key={index}>
      {dataManipulation.map((country, index) => {
        return (
          
          <div className="card shadow rounded" key={index}>
            <Link className='LINK' to="/country-details/" state={{countryDetail:country}}> 
            <img src={`${country.flags.png}`} className="img-thumbnail county-img" alt={`flag of ${country.name}`} />
            <div className="card-body">
              <h2 class="cardInfo">{country.name}</h2>
              <div className='text-dark'>
                <p>
                  <b>Population :</b> {country.population} <br></br>
                  <b>Region :</b> {country.region} <br></br>
                  <b>Capital :</b> {country.capital}
                </p>
              </div>
            </div>
             </Link>
          </div>
         
        );
      })}
    </div>
  );

}

export default Main;