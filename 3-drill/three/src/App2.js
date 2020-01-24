import React, {Component} from 'react';

class App2 extends Component{
    state={
        list:["Eric", "Abby", "Jake", "Seth", "Otavio"],
        userInput: ""
    }

    inputHandler = (input) => {
        this.setState({userInput: input});
    }

    render(){
        let {list, userInput} = this.state;
        let displayList = list.map((e, i)=>{
            if(e.toLowerCase().includes(userInput.toLowerCase())){
                return <h2 key={i}>{e}</h2>;
            }
        })
        return(
            <div style={{textAlign:"center"}}>
                <h1>My List</h1>
                <input onChange={(e)=>this.inputHandler(e.target.value)}/>
                {displayList}
            </div>
        )
    }
}

export default App2;