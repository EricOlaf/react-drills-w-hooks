import React, {Component} from 'react';

class App2 extends Component{
    state={
        name:"",
        pw:""
    }

    //One handler to rule them all and in the darkness bind them...
    changeHandler = (e) => {
        const val = e.target.value
        this.setState({[e.target.name]:val });
    }

    clicked = () =>{
        alert(`Name: ${this.state.name} Password: ${this.state.pw}`);
    }

    render(){
        //The handlers work with and wo calling the handler with the event.
        let {name, pw} = this.state;
        return(
            <div style={{textAlign:"center"}}>
                <h1>WORKING!!!</h1>
                <input value={name} name={"name"} onChange={this.changeHandler}/>
                <input value={pw} name={"pw"} onChange={(e)=>this.changeHandler(e)}/>
                <button onClick={this.clicked}>SUBMIT</button>
            </div>
        )
    }
}

export default App2;