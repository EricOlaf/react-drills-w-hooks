import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
const [person, setPerson] = useState({})

useEffect(()=>{
  fetch('https://swapi.co/api/people/1/')
    .then(res=> res.json())
    .then(data=> setPerson({...data}))
}, [])

  return (
    <div className="App">
      {person.name ?
        <div>
          <h1>We working!</h1>
          <h2>{person.name}</h2>
          <h3>{person.hair_color}</h3>
        </div>
        :
        <h1>LOADING...</h1>}
      
    </div>
  );
}

export default App;
