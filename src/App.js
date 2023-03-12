import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./Components/Nav.js"
import ItemsList from './Components/ItemsList.js';
import UsePagination from "./Components/UsePagination.js"


function App() {

//state is used to manage the search function. To change the default page, the link below can be changed after search?q=.
const [nasaData, setNasaData] = useState("https://images-api.nasa.gov/search?q=iss&media_type=image")
const [nasaInfo, setNasaInfo] = useState([])

useEffect(() => {
  async function fetchNasaData() {
    const response = await fetch(nasaData);
    const data = await response.json();
    setNasaInfo(data)
  }
  fetchNasaData()
  setCurrentPage(1)
}, [nasaData])

//Set up of state for pagination. Keeps track of current page and incoming request to change pages.
const [currentPage, setCurrentPage] = useState(1)
const [postPerPage, setPostPerPage] = useState(20)
const lastPostIndex = currentPage * postPerPage
const firstPostIndex = lastPostIndex - postPerPage
let currentPost = null;


//Conditional added since accessing the "collection" object was throwing errors of properties not being defined. 
nasaInfo.collection && (currentPost = 
  nasaInfo.collection.items.slice(firstPostIndex, lastPostIndex) 
)

//Components used to render sections of the page. state is passed down as params for each component to manage changes. 
return (
  <div className='main-wrapper'>
    <Nav setNasaData={setNasaData} />
    {nasaInfo.collection && 
      <ItemsList nasaInfo={currentPost} />
    }
    {nasaInfo.collection && 
    <div>
      <UsePagination data={nasaInfo.collection} 
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      postPerPage={postPerPage} />
    </div>
    }
    
  </div>
);
}

export default App;
