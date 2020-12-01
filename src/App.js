import React, { useState } from 'react'
import './App.css';
import WineContainer from './containers/WineContainer'
import Navigation from './containers/Navigation.js'

const App = () => {
  const [wines,setWines] = useState('');
    if(!wines){
      (async () => {
        const request = await fetch('https://d52bdf6a7379.ngrok.io/wines');
        const data = await request.json()
        setWines(data)
      })();
    }

    const postWine = (name,date) => {
      if (typeof(name) === "string" && typeof(date) === "string") {
        (async () => {
          const request = await fetch('https://d52bdf6a7379.ngrok.io/wines/', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({name,drink_date:date})
          });
          const data = await request.json()
          setWines([...wines,data])
        })();
      }
    } 
  return (
    <>
      <Navigation />
      {wines && <WineContainer wines={wines} postWine={postWine} />}
    </>
  );
}

export default App;
