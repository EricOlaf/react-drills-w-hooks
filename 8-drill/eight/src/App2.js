import React, { Component } from 'react'

export class App2 extends Component {
    state={
        person:{}
    }
    componentDidMount(){
        fetch('https://swapi.co/api/people/1/')
            .then(res=> res.json())
            .then(data=> this.setState({person:{...data}}))
    }
    render() {
        const {name, height, hair_color,} = this.state.person;
        return (
            <div style={{textAlign: 'center'}}>
                <h1>We made it MA!!!</h1>
                {name ? 
                    <div>
                        <h2>{name}</h2>
                        <h3>{height}</h3>
                        <h3>{hair_color}</h3>
                        <p>Class Component</p>
                    </div> :
                    <h2>loading...</h2>}
            </div>
        )
    }
}

export default App2
