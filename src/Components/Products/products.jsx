import React, { useEffect, useState } from "react";
import "./products.css"
import { Link } from "react-router-dom";

function Products() {
    const [data , setData]  = useState([])


    useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then(text => text.json())
            .then((obj)=>{
                setData(obj.products)
            })
    },[])


    return ( 
        <>
    

        {
         
            !data.length ? <h1>Loading ... </h1>
            
                : data.map((obj)=>{
                    return (
                    
                    <div className="products" key={obj.id}>
                        <h3>{obj.title}</h3>
                        <h3>{obj.category}</h3>
                        <h3 className="price">{obj.price}$</h3>
                        <h3>{obj.description}</h3>
                        <img src={obj.thumbnail} alt="Images" />
                        <br /> <Link to={`${obj.id}`}>Details</Link>


                        <br /> <button >  <Link  to="/">Back Home</Link></button>
                    </div>
                    )
                })
        }
        
        </>
     );
}

export default Products;