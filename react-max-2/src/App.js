import React, {Component} from 'react';
import './App.css';
import uuid from 'react-uuid';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component{
  state={
    userInput:""
  }

  changeHandler = event => {
    const newInput = event.target.value;
    this.setState({userInput: newInput})
  }

  delHandler = i => {
    const newArr = this.state.userInput.split("");
    newArr.splice(i, 1);
    const finalString = newArr.join("")
    this.setState({userInput: finalString});
  }

  render(){
    const lettersArr = this.state.userInput.split("");
    const letters = lettersArr.map((l, i)=>{
      return(
      <div onClick={()=>this.delHandler(i)}>
        <CharComponent letter={l}/>
      </div>
      )  
    })
    return (
      <div className="App">
        <h1>My cool new site</h1>
        <input value={this.state.userInput} onChange={this.changeHandler}/>
        <ValidationComponent stringLength={this.state.userInput.length}/>
        {letters}
      </div>
    );
  }
}

export default App;
