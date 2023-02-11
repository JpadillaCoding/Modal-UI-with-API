import React from "react";

function Result(props) {
    const data = props.data
    const image = data.links[0].href
    return(
        <div className="nasaInfo-item">
            <img src={image}/>
        </div>
    )
}

export default Result;