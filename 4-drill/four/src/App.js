import React, {useState} from 'react';

function App(){
  const [state, changeState] = useState({
    name:"",
    pw:""
  })

  const inputHandler = evnt => {
    const val = evnt.target.value
    changeState({
        ...state, 
        [evnt.target.name]: val
      }
    )
  }

  const clicked = () => {
    alert(`Name: ${state.name}  Password: ${state.pw}`)
  }

return(
  <div style={{textAlign:"center"}}>
    <h1>Enter in Name and Password</h1>
    <input type="text" name="name" placeholder="Enter Name" onChange={inputHandler}/>
    <input type="text" name="pw" placeholder="Enter Password" onChange={inputHandler}/>
    <button onClick={clicked}>SUBMIT</button>
  </div>
)
}
export default App