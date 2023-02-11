import React from "react";
import Result from "./Result";

function ItemsList(props) {
    
    const dataArg = props.nasaInfo.items
    
    const data = dataArg.slice(0,1).map((item, index) => {

        return <Result  data={item} key={index}/>

    })

    return(
        <div className="contentWrapper">
            {data}
        </div>
    )
}

export default ItemsList;