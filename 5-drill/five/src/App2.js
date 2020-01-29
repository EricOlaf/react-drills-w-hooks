import React, {Component} from 'react';
import Image2 from "./components/Image2";

class App2 extends Component{
    state={
        myImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBv2z3Cld9t5YTIkYDvBnelrQcsvv0JEh5pLWZIPdD_vJPWl7&s"
    }

    render(){
        return(
            <div style={{textAlign: 'center'}}>
                <h1>Here I am, Rock me like a hurricane!!!🤘</h1>
                <Image2 myImage={this.state.myImage}/>
            </div>
        )
    }
}

export default App2