import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import store from './store/store';
import { Link } from 'react-router-dom';


function ProductHeader(props) {
  console.log(props);
  return (
    <div class='d-flex justify-content-between bg-info headdiv '>
      <h1 className='text-danger ms-5'><b>My Shopping App</b> </h1>
    
      <Link to='/cart' ><button class='btn btn-warning rounded mt-2 me-2'><span class="bi bi-cart3"> ({props.addcart.length})</span></button> </Link>

    </div>
  )
}

export default connect(state=>state.prod) (ProductHeader)