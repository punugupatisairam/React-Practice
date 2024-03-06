import React, { useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

function Dummydata() {
    let [products,setProducts] = React.useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((res)=>{
            setProducts([...res.data])
            // console.log(res);
    
        },[])
    })
    function additem(newproduct){

    }
    // <Cart ></Cart>
  return (
    <div className='mdiv'>
        {
            products.map((product)=>{
                return ( 
                    <div className='items' >
                        <img src={product.image} width='100px' alt='image' /> <br />
                        <span>{product.title}</span><br />
                        <span>{product.price}</span> &nbsp; &nbsp;
                        <span>{product.rating.rate}</span> <br /><br />
                        <button onClick={()=>{additem(product)}}>Add to Cart</button>
                    </div>
                    
                )
            })
        }



    </div>
  )
}

export default Dummydata