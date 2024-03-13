import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Cart from './Cart';
import { Link } from 'react-router-dom';
import ProductHeader from './ProductHeader';

function Products(props) {
    console.log(props);
    // function addcart(e){
    //   if(e.target.innerHTML==='Add to Cart  '){
    //       e.target.innerHTML='go to cart'
    //   }else
    //   {
    //     e.target.innerHTML='Add to Cart  '
    //   }
      
    // }
  return (
     <div class='d-flex justify-content-center flex-wrap'>

        {
            props.prod.products.map((product)=>{
                return ( <div class='w-25 rounded shadow m-3 text-center p-2'>
                        <img src={product.images[0]} alt="" /> <br />
                        <span>Brand : {product.brand}</span> <br />
                        <span>Title : {product.title}</span> <br />
                        <span>Price :<i class="bi bi-currency-rupee"></i> {product.price}</span> &nbsp; &nbsp;
                        <span>Rating : {product.rating}</span> <br /> <br />
                        <div className='addcartbut'>
                        <button class='btn btn-warning rounded' onClick={()=>{props.dispatch({type:'ADD',payload:product})}}>Add to Cart  <i class="bi bi-cart3"></i> </button>
                        </div>
                     </div> )
            })
            
        }
        {/* <Cart product={product}> </Cart> */}
    </div>  

  )
}

export default connect(store=>store) (Products)