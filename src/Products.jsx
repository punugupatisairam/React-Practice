import axios from 'axios'
import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Products() {
    var [items,setItems] = React.useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            // console.log(res);
            setItems(res.data)
        })
    },[])
  return (
   
   <div class='d-flex jsutify-content-center flex-wrap'>
        {
            items?.map((item,i)=>{
                // console.log(item.title);
                return ( <div class='rounded w-25 shadow m-2' >
                    <img src={item.image} alt="image" /> <br />
                    <span key={i}>{item.title}</span><br />
                    <span>{item.price}</span> &nbsp; &nbsp; 
                    <span>{item.rating.rate}</span>
                </div> )
            })
        }
    </div>
  )
}

export default Products