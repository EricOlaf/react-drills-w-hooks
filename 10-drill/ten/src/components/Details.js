import React, {useState, useEffect} from 'react'

function Details(props) {
    const [prod, setProd] = useState({});

    useEffect(()=>{
        console.time('fetch prod')
        fetch(`https://practiceapi.devmountain.com/products/${
            props.match.params.id
          }`)
          .then(res=> res.json())
          .then(data=> setProd({...data}))
          console.timeEnd('fetch prod')
    }, [])

    return (
        <div>
            <h1>DETAILS</h1>
            <h2>{prod.title}</h2>
            <img src={prod.image} alt={prod.desc} style={{width: '65vw', margin:'auto'}}/>
            <h3>{prod.price}</h3>
        </div>
    )
}

export default Details
