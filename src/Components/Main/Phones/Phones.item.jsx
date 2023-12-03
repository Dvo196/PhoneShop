import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./PhonesItem.module.css"

function PhonesItem() {

    const [data , setData]  = useState([])

    let obj = useParams();



    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${obj.id}`)
            .then(text => text.json())
            .then((obj)=>{
                setData([obj])
            })
    },[])


    return (
         <>
      {
            !data.length ? <h1>Loading ... </h1>
                : data.map((obj)=>{
                    return <div className={s.title}  key={obj.id}>
                        <h1>{obj.title}</h1>
                        <h1>{obj.category}</h1>
                        <h1 className={s.price}>{obj.price}$</h1>
                        <h1 className={s.rating}>{obj.rating}Rating</h1>
                        <h1>{obj.description}</h1>

                        <img className={s.sad} src={obj.thumbnail} alt="Images" />

                         <br /> <button   className={s.back_btn}>  <Link  to="/">Back</Link></button>
                    </div>
                })
        }
    
         </> 
    );
}

export default PhonesItem ;