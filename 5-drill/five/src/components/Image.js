import React from 'react'

function Image(props) {
    return (
        <div>
            <img src={props.jsImage} style={{width: '85vw'}}/>
        </div>
    )
}

export default Image
