import React, {Component} from 'react';
import './App.css';

class App extends Component{
  state={
    userInput:""
  }

  inputHandler = e => {
    this.setState({userInput: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <section>
          <p>{this.state.userInput}</p>
          <input placeholder="enter some value" value={this.state.userInput} onChange={(e)=>{this.inputHandler(e)}}/>
        </section>
      </div>
    );
  }  
}

export default App;
