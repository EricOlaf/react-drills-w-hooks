import React from 'react'

function Todo(props) {
    return (
        <div>
            <h3 onClick={()=>props.delTask(props.task)}>
                {props.task}
            </h3>
        </div>
    )
}

export default Todo
