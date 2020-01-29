import React, {useState} from 'react';
import Image from './components/Image';
import './App.css';

function App() {
  const [jsImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBv2z3Cld9t5YTIkYDvBnelrQcsvv0JEh5pLWZIPdD_vJPWl7&s")
  
  return (
    <div className="App">
      <h1>Hey Hey</h1>
      <Image jsImage={jsImage}/>
    </div>
  );
}

export default App;
