import { connect } from 'react-redux';
import React from 'react'
import { Link } from 'react-router-dom'
import store from './store/store';

function Orderplaced(props) {

  function continueshop(){
    props.prod.products.map((item)=>{
        return "";
    })
  }
  return (
    <div>
        <div className='shadow rounded w-50 bg-primary orderdiv text-center'>
            <h1 className='text-danger'> <b>Your Order Placed</b></h1> 
            <br /><br /><br />
            <Link to='/products'><button className='btn btn-warning btn-lr' onClick={continueshop()}>Continue Shopping </button></Link>
            {
           
            }

        </div>
        
    </div>
  )
}

export default connect(store=>store) (Orderplaced)
