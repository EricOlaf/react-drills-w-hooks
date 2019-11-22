import React, {Component} from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent'

class App extends Component{
  state={
    userInput:""
  }

  changeHandler = (event) => {
    const newInput = event.target.value;
    this.setState({userInput: newInput})
  }

  render(){
    return (
      <div className="App">
        <h1>My cool new site</h1>
        <input value={this.state.userInput} onChange={this.changeHandler}/>
        <ValidationComponent stringLength={this.state.userInput.length}/>
      </div>
    );
  }
}

export default App;
