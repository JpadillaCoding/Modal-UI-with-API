import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./Components/Layout.js"
import ItemsList from './Components/ItemsList.js';
import UsePagination from "./Components/UsePagination.js"
// key = TR0olj5zhUcYkIIXzdpmOoIeAeesADDTd9KXQsuY


function App() {

const nasaData = "https://images-api.nasa.gov/search?q=hubble&media_type=image"


const [nasaInfo, setNasaInfo] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [postPerPage, setPostPerPage] = useState(20)




useEffect(() => {

  async function fetchNasaData() {
    const response = await fetch(nasaData);
    const data = await response.json();
    setNasaInfo(data)
    
  }
  fetchNasaData()
}, [])

const lastPostIndex = currentPage * postPerPage
const firstPostIndex = lastPostIndex - postPerPage
let currentPost = null;
nasaInfo.collection && (currentPost = 
  nasaInfo.collection.items.slice(firstPostIndex, lastPostIndex) 
)


  return (
    <div className='main-wrapper'>
      <Nav />
      {nasaInfo.collection && 
        <ItemsList nasaInfo={currentPost} />
      }
      {nasaInfo.collection && 
      <div>
        <UsePagination data={nasaInfo.collection} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        postPerPage={postPerPage}/>
      </div>
      }
      
    </div>
  );
}

export default App;
