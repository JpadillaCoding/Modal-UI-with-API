import React from "react";

function Search({setNasaData}) {

    return (
    <div class="input-group m-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
    </div>

    )
}


export default Search;