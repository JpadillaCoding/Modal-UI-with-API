import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./Components/Layout.js"
import ItemsList from './Components/ItemsList.js';
import UsePagination from "./Components/UsePagination.js"
import Search from './Components/Search.js';


function App() {


const [nasaData, setNasaData] = useState("https://images-api.nasa.gov/search?q=hubble&media_type=image")
const [nasaInfo, setNasaInfo] = useState([])

useEffect(() => {
  async function fetchNasaData() {
    const response = await fetch(nasaData);
    const data = await response.json();
    setNasaInfo(data)
  }
  fetchNasaData()
}, [nasaData])


const [currentPage, setCurrentPage] = useState(1)
const [postPerPage, setPostPerPage] = useState(20)
const lastPostIndex = currentPage * postPerPage
const firstPostIndex = lastPostIndex - postPerPage
let currentPost = null;
nasaInfo.collection && (currentPost = 
  nasaInfo.collection.items.slice(firstPostIndex, lastPostIndex) 
)


  return (
    <div className='main-wrapper'>
      <Nav setNasaData={setNasaData}/>
      <Search setNasaData={setNasaData} />
      {
        nasaInfo.collection && (
          <ItemsList nasaInfo={currentPost} />,
        <div>
          <UsePagination data={nasaInfo.collection} 
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          postPerPage={postPerPage}/>
        </div>
        )
      };
      
    </div>
  );
}

export default App;
