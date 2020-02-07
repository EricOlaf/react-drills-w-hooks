import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Products() {
    const [prods, setProds] = useState([])

    useEffect(()=>{
        console.time('fetch prods')
        fetch('https://practiceapi.devmountain.com/products')
        .then(res=> res.json())
        .then(data=> setProds([...data]))
        console.timeEnd('fetch prods')
    }, [])

    const list = prods.map(x=>{
        return(
        <span key={x.id} style={{margin: '20px', border:'grey solid 2px'}}>
            <Link to={`/details/${x.id}`}>
                <h3>{x.title}</h3>
                <img src={x.image} style={{width:'300px'}} alt={x.title}/>
                <p>{x.price}</p>
            </Link>
        </span>
        )
    })
    return (
        <div>
            <h1>PRODUCTS</h1>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around',margin:'auto', width:'80%'}}>
                {list}
            </div>
            
        </div>
    )
}

export default Products
