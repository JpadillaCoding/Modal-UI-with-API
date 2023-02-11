import React from "react";
// import Modal from "./Modal.js"
import { useState } from "react";

function Result(props) {
    const data = props.data
    const image = data.links[0].href
    const info = data.data[0]

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)   
    }

    if (modal) {
        document.body.classList.add("noScroll")
    }
    else {
        document.body.classList.remove("noScroll")
    }

    return(
        <div className="nasaInfo-item">
            <img src={image} onClick={toggleModal}/>
            {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                    <h1>{info.title}</h1>
                    <h2>{info.description}</h2>
                    <img src={image}/>
                    <button onClick={toggleModal}>X</button>
                </div>
            </div>

            )
            }
        </div>
    )
}

export default Result;