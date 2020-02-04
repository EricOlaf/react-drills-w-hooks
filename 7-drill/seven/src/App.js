import React, {useState} from 'react';
import List from './components/List';
import NewTask from './components/NewTask'; 
import './App.css';

function App() {

  const [taskArr, setTaskArr] = useState(['sweep', 'dishes', 'laundry', 'lift'])

  const [userInput, setUserInput] = useState('')

  const userInputHandler = (e) =>{
    const newTask = e.target.value
    setUserInput(newTask);
  }

  const addTaskHandler = () =>{
    const newArr = [...taskArr, userInput]
    setTaskArr([...newArr]);
    setUserInput('')
  }

  const deleteTaskHandler = (delTask) => {
    const newArr = taskArr.filter(x=> x !== delTask)
    setTaskArr([...newArr]);
  }

  return (
    <div className="App">
      <h1>THE TASK LIST!!!</h1>
      <NewTask userInputHandler={userInputHandler} addTaskHandler={addTaskHandler} userInput={userInput}/>
      <List taskArr={taskArr} delTask={deleteTaskHandler}/>
    </div>
  );
}

export default App;
