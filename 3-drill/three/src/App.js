import React, {useState} from 'react';
import './App.css';

function App() {
  const [list] = useState(["Eric", "Abby", "Jake", "Seth", "Otavio"]);
  const [input, setInput] = useState("");

  const displayList = list.map((e,i)=>{
    if(e.toLowerCase().includes(input.toLowerCase())){
      return <h3 key={i}>{e}</h3>
    }
  })

  const inputHandler = (userInput) => {
    setInput(userInput);
  }
  return (
    <div className="App">
      <h1>My List of AMIGOS</h1>
      <input onChange={(e)=>{inputHandler(e.target.value)}}/>
      {displayList}
    </div>
  );
}

export default App;
