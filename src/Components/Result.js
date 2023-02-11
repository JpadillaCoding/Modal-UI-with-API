import React from "react";
import Modal from "./Modal.js"

function Result(props) {
    const data = props.data
    const image = data.links[0].href
    const info = data.data[0]
    console.log(info)
    return(
        <div className="nasaInfo-item">
            <img src={image} />
            <Modal info={info} image={image} />
        </div>
    )
}

export default Result;