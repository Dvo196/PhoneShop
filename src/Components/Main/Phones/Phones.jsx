import axios from "axios";
import React, { useEffect, useState } from "react";
// import s from "./Phones.module.css"
import { Link } from "react-router-dom";
import s from "./Phones.module.css"
import PhonesItem from "./Phones.item"
// Our Brand
function Phones() {
    const [data , setData]  = useState([])


    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
            .then((obj)=>{
                setData(obj.data.products)
            })
    },[])

   
           
           
           
           
    return ( 
        <>
    

        {/* {
         
             data.filter((obj)=>{
                 return(
                     
                     <div>
                            {obj.category == "smartphones"}
                         {console.log(obj , ">---------")}
                    
                     <div style={{border:"2px solid red"}} key={obj.id}>
                        <h3>{obj.title}</h3>
                        <h3 className="price">{obj.price}$</h3>
                        <h3>{obj.description}</h3>
                        <img src={obj.thumbnail} alt="Images" />
                        <Link to={`${obj.id}`}>Details</Link>

                    </div>
                    </div>


                    )
                })
        } */}
{
  !data.length ? <h1>Loading ... </h1>   
   
  :  <div className={s.phones}>

      <div className={s.horizontalGroup}>
        {
          data
            .filter((obj) => obj.category === "smartphones")
            .slice(0, 2)
            .map((obj) => (
              <div key={obj.id} className={`${s.phoneItem} ${s.firstGroup}`}>
                <img className={s.phone_banners} src={obj.thumbnail} alt="Images" />
                <div className={s.bbb} key={obj.id}>
                  <h3>{obj.title}</h3>
                  <h3 className={s.price}>{obj.price}$</h3>
                  <h3>{obj.description}</h3>
                  <h3 className={s.rating}>{obj.rating}Rating</h3>

                  <Link to={`${obj.id}`}>Details</Link>
                </div>
              </div>
            ))
        }
      </div>
      <div className={s.horizontalGroup}>
        {
          data
            .filter((obj) => obj.category === "smartphones")
            .slice(2, 4)
            .map((obj) => (
              <div key={obj.id} className={`${s.phoneItem} ${s.secondGroup}`}>
                <img className={s.phone2} src={obj.thumbnail} alt="Images" />
                <div key={obj.id}>
                  <h3>{obj.title}</h3>
                  <h3 className={s.price}>{obj.price}$</h3>
                  <h3>{obj.description}</h3>
                  <h3 className={s.rating}>{obj.rating}Rating</h3>
                  <Link to={`${obj.id}`}>Details</Link>
                </div>
              </div>
            ))
        }
      </div>
      <div className={s.centeredGroup}>
        {
          data
            .filter((obj) => obj.category === "smartphones")
            .slice(4, 5)
            .map((obj) => (
              <div key={obj.id} className={`${s.phoneItem} ${s.thirdGroup}`}>
                <img className={s.asdasd} src={obj.thumbnail} alt="Images" />
                <div key={obj.id}>
                  <h3>{obj.title}</h3>
                  <h3 className={s.price}>{obj.price}$</h3>
                  <h3>{obj.description}</h3>
                  <h3 className={s.rating}>{obj.rating}Rating</h3>
                  <Link to={`${obj.id}`}>Details</Link>
                </div>
              </div>
            ))
        }
      </div>
      {/* <button className={s.btn_more}><Link>See more</Link></button> */}
      <br /> <button   className={s.btn_more}>  <Link  to="/Products">See more</Link></button>

    </div>
}




        
        </>
     );
            
    
    
}

export default Phones;