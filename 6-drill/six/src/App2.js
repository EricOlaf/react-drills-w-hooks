import React, { Component } from 'react'
import Todo from './Todo';

class App2 extends Component {
    state={
        chores:["code", "eat", "sleep", "repeat"],
        inputValue: ""
    }

    inputHandler = e => {
        const t = e.target.name;
        const val = e.target.value;
        this.setState({[t]:val})
    }

    choreSubmitHandler = () =>{
        const {chores, inputValue} = this.state
        this.setState({chores: [...chores, inputValue], inputValue: ""})
    }

    render() {
        const {chores, inputValue} = this.state
        const list = chores.map((chore, ind)=>
            <Todo key={ind} chore={chore}/>
        )   
        return (
            <div style={{textAlign:'center'}}>
                <h1>WERKS...</h1>
                <input type='text' name="inputValue" value={inputValue} onChange={this.inputHandler}/>
                <button onClick={this.choreSubmitHandler}>SUBMIT CHORE</button>
                {list}
            </div>
        )
    }
}

export default App2
