import React from 'react';
import router from './router';
import {HashRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        {router}
      </div>
    </HashRouter>
  );
}

export default App;
