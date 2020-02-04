import React, { Component } from 'react'
import List from './components/List';
import NewTask from './components/NewTask';

export class App2 extends Component {
    state={
        taskArr:['sweep', 'dishes', 'laundry', 'lift'],
        userInput: ''
    }

    addTaskHandler = () => {
        const newArr = [...this.state.taskArr, this.state.userInput];
        this.setState({taskArr: newArr, userInput: ''});
    }

    userInputHandler = (e) => {
        console.log("Hit add user input");
        this.setState({userInput: e.target.value})
    }

    deleteTaskHandler = (delTask) => {
        console.log("hit delete handler")
        console.log(delTask);
        const newArr = this.state.taskArr.filter(x=> x !== delTask)
        this.setState({taskArr: newArr});
    }

    render() {
        const {taskArr, userInput} = this.state;
        return (
            <div style={{textAlign: "center"}}>
                <h1>HELLO PARTY PEOPLE!!!</h1>
                <NewTask addTaskHandler={this.addTaskHandler} userInputHandler={this.userInputHandler} userInput={userInput}/>
                <List taskArr={taskArr} delTask={this.deleteTaskHandler}/>
            </div>
        )
    }
}

export default App2
