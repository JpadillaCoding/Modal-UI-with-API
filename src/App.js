import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
// key = TR0olj5zhUcYkIIXzdpmOoIeAeesADDTd9KXQsuY


function App() {

const nasaData = "https://images-api.nasa.gov/search?q=hubble&media_type=image"
const [nasaInfo, setNasaInfo] = useState([])

useEffect(() => {
  fetch(nasaData)
  .then(res => res.json())
  .then(requestedData => setNasaInfo(requestedData))
  .catch((error) => console.log("Fetch error",error))
},[])

console.log(nasaInfo.collection)


  return (
    <div>
      <h1>Working?</h1>
    </div>
  );
}

export default App;
