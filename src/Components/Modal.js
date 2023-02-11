import React from "react";

function Modal(props) {
    const image = props.image
    const info = props.info
    return (
        <div>
            <h1>{info.title}</h1>
            <h2>{info.description}</h2>
            <img src={image}/>
        </div>
    )
}

export default Modal