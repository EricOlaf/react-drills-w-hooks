import React from 'react';
import "./CharComponent.css"

const CharComponent = props =>{
    return(
        <div className="char">{props.letter}</div>
    )
}
export default CharComponent;