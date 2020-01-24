import React, {useState} from 'react';

import './App.css';

function App() {
    const [input, setInput] = useState("");
  return (
    <div className="App">
      <section>
          {input}
        <input onChange={(e)=>setInput(e.target.value)}></input>
      </section>
    </div>
  );
}

export default App;