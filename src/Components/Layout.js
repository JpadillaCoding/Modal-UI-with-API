import React from "react";
import nasa from "../images/nasa.png"
import Search from "./Search";
import "./components.css"

function Nav({setNasaData}) {
    function navBarClick() {
        setNasaData("https://images-api.nasa.gov/search?q=iss&media_type=image")
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg ">
                <div className="nav-logo">
                    <img src={nasa} className="nav-img"/>
                    <h1 className="navbar-title" onClick={navBarClick}>NASA Image Search Engine</h1>
                </div>
                    <Search setNasaData={setNasaData}/>
            </nav>
        </div>
    )
}

export default Nav;