import React from 'react';
import {HashRouter} from 'react-router-dom';
import Routes from './routes'
import {Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <nav>
          <Link to={'/'}>HOME</Link>
          <Link to={'/about'}>ABOUT</Link>
          <Link to={'/signup'}>SIGNUP</Link>
        </nav>
        <h1>WORKING</h1>
        {Routes}
      </div>
    </HashRouter>
  );
}

export default App;
