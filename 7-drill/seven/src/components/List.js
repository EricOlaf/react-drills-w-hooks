import React from 'react'
import Todo from './Todo';

function List(props) {
    const displayTasks = props.taskArr.map((el, ind)=>{
        return <Todo key={ind} task={el} delTask={props.delTask}/>
    })
    return (
        <h3>
            {displayTasks}
        </h3>
    )
}

export default List
