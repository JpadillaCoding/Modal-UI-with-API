import React from "react";
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
            <img src={image} onClick={toggleModal} className="nasaInfo-img"/>
            {modal && (
            <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-box-wrapper">
                    <div className="modal-header">
                        <h5 className="modal-title">{info.title}</h5>
                        <button type="button" className="close" onClick={toggleModal}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <img className="modal-img" src={image}/>
                        <div className="modal-info-wrapper">
                            <div>
                                <h6 className="modal-description">{info.description}</h6>
                            </div>
                            <div>
                                <h6>Date Created: </h6>
                                <p className="modal-date">{info.date_created}</p>
                            </div>
                            <div>
                                <h6>Center:</h6>
                                <p className="modal-center">{info.center}</p>
                            </div>
                            <div>
                                <h6>Secondary creator(s):</h6>
                                <p className="modal-creators">{info.secondary_creator}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Result;