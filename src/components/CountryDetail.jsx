import React from "react";
import {useLocation} from 'react-router-dom';
import { Link } from "react-router-dom";


function CountryDetail(){
    // location is react hook to use if we need 
   const location = useLocation()
   const country = location.state.countryDetail
   
    return (
       
        <div>
            <Link to="/"> <button className="backButton rounded shadow"> Back</button></Link>
            
                <div className="detailDiv">
                    <div className="leftFlag">
                        <img src={`${country.flags.png}`} className="img-fluid single-county-img" alt={`flag of ${country.name}`} />
                    </div>
                        <div className="rightTexts">
                            <h2 className="text-primary">{country.name}</h2>
                            <div className="midDetail">
                                <div>
                                    <p><b>Native Name :</b>{ country.nativeName && ` ${country.nativeName}`}</p>
                                    <p><b>Population :</b>{country.population && ` ${country.population}`}</p>
                                    <p><b>Region:</b>{country.region && ` ${country.region}`}</p>
                                    <p><b>Sub Region :</b>{ country.subregion &&` ${country.subregion}`}</p>
                                    <p><b>Capital :</b>{ country.capital && ` ${country.capital}`}</p>
                                </div>
                                <div className="midDetail-right">
                                    <p><b>Top Level Domain :</b>{country.topLevelDomain &&` ${country.topLevelDomain}`}</p>
                                    <p><b>Currencies :</b>{country.currencies && country.currencies.map((e) => ` ${e.name}, `)}</p>
                                    <p><b>Language :</b>{country.languages && country.languages.map((e) => ` ${e.name}, `)}</p>
                                </div>
                            </div>
                            {/* one way of adding && condition below*/}
                            { country.borders &&  (<div className="borderDetail"> 
                                <p><b>Border Countries :</b> {` ${ country.borders.join(' - ')}`}</p>
                            </div>)}
                        </div>
                </div>
           
        </div> 
    );
}
export default CountryDetail;

// return (
//         <div>
//             <button onChange={(e)=> clickBack(e) } className="backToMain"> Back </button>
//             { data.map((country) => {
//         return  (
//                 <div className="detailDiv">
//                     <div className="leftFlag">
//                         <img src={`${country.flags.png}`} className="img-fluid single-county-img" alt={`flag of ${country.name}`} />
//                     </div>
//                         <div className="rightTexts">
//                             <h2>{country.name}</h2>
//                             <div className="midDetail">
//                                 <div>
//                                     <p><b>Native Name:</b>{` ${country.nativeName}`}</p>
//                                     <p><b>Population:</b>{` ${country.population}`}</p>
//                                     <p><b>Region:</b>{` ${country.region}`}</p>
//                                     <p><b>Sub Region:</b>{` ${country.subregion}`}</p>
//                                     <p><b>Capital:</b>{` ${country.capital}`}</p>
//                                 </div>
//                                 <div className="midDetail-right">
//                                     <p><b>Top Level Domain:</b>{` ${country.topLevelDomain}`}</p>
//                                     <p><b>Currencies:</b></p>
//                                     <p><b>Language:</b>{country.languages.map((e) => ` ${e.name}, `)}</p>
//                                 </div>
//                             </div>
//                             <div className="borderDetail">
//                                 <p><b>Border Countries:</b> {` ${country.borders} `}</p>
//                             </div>
//                         </div>
//                 </div>
//                 );
//             })}   
//         </div>
//     );