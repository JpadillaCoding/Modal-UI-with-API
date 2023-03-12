import React from "react";
import { useState } from "react";
import "./components.css" 

function Search({setNasaData}) {
    /*
    -inputVal changes state to take in the value of what is typed in the search bar everytime a character is added or deleted
    -handleEnter adds the feature of being able to search with "enter"
    -newSearch plugs in the value of the search bar into the API request. Since the request is in useEffect's dependency, anytime 
     NasaDate state is changed then the page will reload with the new data. 
     -formattedString uses built in features to adjust the users input to fit URL syntax.
    */
    const [inputVal, setInputVal] = useState("")

    function change(event) {
        setInputVal(event.target.value)
    }
    function handleEnter(event) {
        if (event.keyCode === 13) {
            newSearch();
          }
    }
    function newSearch() {
        const formattedString = encodeURIComponent(inputVal.trim())
        setNasaData(`https://images-api.nasa.gov/search?q=${formattedString}&media_type=image`)
    }

    return (
        <div className="container">
            <div className="input-group">
                <input type="text" className="form-control placeholder" placeholder="Exploring the Universe through NASA's Database"
                value={inputVal} 
                onChange={change}
                onKeyDown={handleEnter}/>
                <div className="input-group-append">
                    <button className="btn btn-grad" type="button" onClick={newSearch}>Search</button>
                </div>
            </div>
        </div>

    )
}


export default Search;