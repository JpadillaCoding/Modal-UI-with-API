import React from "react";
import Result from "./Result";
import "./components.css"

function ItemsList(props) {
    
    const dataArg = props.nasaInfo
    
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