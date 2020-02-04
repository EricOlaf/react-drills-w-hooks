import React from 'react'

function NewTask(props) {
    return (
        <div>
            <input onChange={props.userInputHandler} value={props.userInput} placeholder="Enter Task"/>
            <button onClick={props.addTaskHandler}>SUBMIT TASK</button>
        </div>
    )
}

export default NewTask
