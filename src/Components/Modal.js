import React from "react";
import { useState } from "react";

function Modal(props) {
    const image = props.image
    const info = props.info


    return (
        <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
                <h1>{info.title}</h1>
                <h2>{info.description}</h2>
                <img src={image}/>
            </div>
        </div>
    )
}

export default Modal