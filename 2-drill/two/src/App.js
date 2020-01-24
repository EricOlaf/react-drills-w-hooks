import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [list, setList] = useState(["Snickers", "Milky Way", "Whatchamacallit", "Symphony", "Quest", "Cliff Builders"]);

  const displayList = list.map((e, i)=>
  <h2 key={i}>{e}</h2>
  )
  return (
    <div className="App">
      <h1>List:</h1>
      {displayList}
    </div>
  );
}

export default App;
