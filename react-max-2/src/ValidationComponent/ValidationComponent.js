import React from 'react'

const ValidationComponent = props =>{
    return(
        <div>
            {
                props.stringLength > 5 ? <p>Text is too long</p> : <p>Text is too short</p>
            }
        </div>
    )
}
export default ValidationComponent