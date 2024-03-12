import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { connect } from 'react-redux'
import store from './store/store';

function ProductHeader(props) {
  console.log(props);
  return (
    <div class='d-flex justify-content-end headdiv'>
    
    <button class='btn btn-warning rounded'><span style={{listStyleType:'none'}} class="bi bi-cart3"> - {props.prod.addcart.length}</span></button>

    </div>
  )
}

export default connect(store=>store) (ProductHeader)