import React from "react";
import { useState } from "react";
import "./components.css"

//Future us to make modals components

function Modal(props) {
    const image = props.image
    const info = props.info

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }


    return (
        <div>
        {modal && (
            <div className="modal" onClick={toggleModal}>
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h1>{info.title}</h1>
                    <h2>{info.description}</h2>
                    <img src={image}/>
                    <button onClick={toggleModal}>X</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default Modal