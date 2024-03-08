import React, { useEffect } from 'react'
import axios from 'axios'

function ApiData() {
    let [products,setProducts] = React.useState()
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
                setProducts([...res.data])
                // console.log(res.data);
        })
    },[])
    // console.log(products);

  return (
    <div class='d-flex flex-wrap mdiv'>
        { 
            products?.map((product)=>{
                console.log(product);
                return (
                <div class='shadow rounded text-center secdiv'>
                    <img src={product.image} alt="pic" className='prodimg' /><br />
                    <span>{product.title} </span><br />
                    <span>{product.price}</span> &nbsp; &nbsp;&nbsp;
                    <span>{product.rating.rate}</span>

                </div>
                )
            })
        }
    </div>
  )
}

export default ApiData