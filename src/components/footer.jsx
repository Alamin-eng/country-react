import React, {useState} from "react";

function Footer({headerBackground}){
    return (
        <div className="p-3 footer-div" style={{
                backgroundColor:`${headerBackground}`,
            }}>
            <p className="text-success">&#9400; 2022 Made With Love  Mohammad Alamin</p>
        </div>
    )
}
export default Footer;