import React from "react";
import "../App.css"

function Nav({setNasaData}) {
    function navBarClick() {
        setNasaData("https://images-api.nasa.gov/search?q=hubble&media_type=image")
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <h1 className="navbar-title" onClick={navBarClick}>NASA Image Search Engine</h1>
            </nav>
        </div>
    )
}

export default Nav;