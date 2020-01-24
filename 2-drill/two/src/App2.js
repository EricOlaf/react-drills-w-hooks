import React, {Component} from 'react';

class App2 extends Component{
    state={
        foodList:["Snickers", "Milky Way", "Whatchamacallit", "Symphony", "Quest", "Cliff Builders"]
    }
    render(){
        let displayItem = this.state.foodList.map((e, i)=>
            <h2 key={i}>{e}</h2>
            )
        return(
            <div style={{textAlign: "center"}}>
                <h1>I work</h1>
                {displayItem}
            </div>
        )
    }
}

export default App2;