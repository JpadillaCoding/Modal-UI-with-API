import React from "react";
import Result from "./Result";
import "./components.css"
import empty from "../images/empty.gif"

function ItemsList(props) {
    const dataArg = props.nasaInfo

    if(dataArg.length == 0) {
        return (
            <div className="empty-container">
                <img src={empty}/>
                <h1>Your search yielded no results!</h1>
            </div>
    )}
    
    const data = dataArg.map((item, index) => {
        return <Result  data={item} key={index}/>
    })
    
    return(
            <div className="contentWrapper">
                {data}
            </div>
    )
}

export default ItemsList;