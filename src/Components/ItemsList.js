import React from "react";
import Result from "./Result";
import "./components.css"

function ItemsList(props) {
    
    const dataArg = props.nasaInfo.items
    
    const data = dataArg.slice(0,20).map((item, index) => {

        return <Result  data={item} key={index}/>

    })
    console.log(dataArg)

    return(
        <div className="contentWrapper">
            {data}
        </div>
    )
}

export default ItemsList;