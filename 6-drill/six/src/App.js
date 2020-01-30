import React, {useState} from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  const [chores, setChores] = useState(["code", "eat", "sleep", "repeat"]);
  const [userInput, setInput] = useState("");

  const displayChores = chores.map((chore, ind)=>
    <Todo key={ind} chore={chore}/>
  )

  const inputHandler = (e) => {
    const val = e.target.value;
    setInput(val);
  }

  const submitHandler = () => {
    setChores([...chores, userInput]);
    setInput("");
  }
  
  return (
    <div className="App">
      <h1>My Chores List:</h1>
      <input type='text' value={userInput} onChange={inputHandler}/>
      <button onClick={submitHandler}>SUBMIT</button>
      {displayChores}
    </div>
  );
}

export default App;
