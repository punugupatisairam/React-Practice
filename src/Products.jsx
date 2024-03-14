import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Cart from './Cart';
import { Link } from 'react-router-dom';
import ProductHeader from './ProductHeader';

function Products(props) {
    console.log(props);
  return (
    <div>
    <ProductHeader className='headele'></ProductHeader> 

     <div class='d-flex justify-content-center flex-wrap mt-5'>

        {
            props.prod.products.map((product,i)=>{
                return ( <div class='w-25 rounded shadow m-3 text-center p-4'> 
                        <img src={product.images[0]} alt="" /> <br /> <br />
                        <span>Brand : {product.brand}</span> <br />
                        <span>Title : {product.title}</span> <br />
                        <span>Price :<i class="bi bi-currency-rupee"></i> {product.price}</span> <br />
                        <span>Rating : {product.rating}</span> <br /> <br />
                        <div className='addcartbut' >
                       {!product.inCart &&  <button class='btn btn-warning rounded'  onClick={()=>{props.dispatch({type:'ADD',payload:i})}}>Add to Cart  <i class="bi bi-cart3"></i> </button>}
                       {product.inCart &&  <Link to='/cart'> <button class='btn btn-warning rounded'  >Go to Cart  <i class="bi bi-cart3"></i> </button></Link>}
                        
                        </div>
                     </div> )
            })
            
        }
        {/* <Cart product={product}> </Cart> */}
    </div>  
    </div>

  )
}

export default connect(store=>store) (Products)