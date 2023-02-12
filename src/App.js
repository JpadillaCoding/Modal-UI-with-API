import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from "./Components/Layout.js"
import ItemsList from './Components/ItemsList';
// key = TR0olj5zhUcYkIIXzdpmOoIeAeesADDTd9KXQsuY


function App() {

const nasaData = "https://images-api.nasa.gov/search?q=hubble&media_type=image"
const [nasaInfo, setNasaInfo] = useState([])


async function fetchNasaData() {
  const response = await fetch(nasaData);
  const data = await response.json();
  return data
}
useEffect(() => {
  fetchNasaData().then(data => {
    setNasaInfo(data)
  })
}, [])

  return (
    <div className='main-wrapper'>
      <Nav />
      {nasaInfo.collection &&
        <ItemsList nasaInfo={nasaInfo.collection} />
      }
    </div>
  );
}

export default App;
