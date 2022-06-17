import React, {useState} from "react";

function Header({darkMode,headerBackground,darkText,sunOrMoon}){

    return (
        <div className="shadow p-3 mb-3 rounded
        headerAndDarkbutton" style={{
                backgroundColor:`${headerBackground}`}}>
            <h1 >Where in the world ? </h1> 
            <button className="darkButton rounded" onClick ={(e) => darkMode(e)} >
                <i class={`fa fa-${sunOrMoon}-o`} style={{paddingRight:'.4em',fontWeight:'bolder'}}></i>{darkText}</button>
        </div>
    )
}
export default Header;