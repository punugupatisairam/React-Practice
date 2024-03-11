import React from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart(props) {

    console.log(props);
  return (
    <div class='d-flex flex-wrap'>
        {
            props.prod.addcart.map((each)=>{
                return ( <div class='shadow rounded w-25 m-2 text-center'>
                   
                    <img src={each.images[0]} alt="" /> <br />
                    <span>{each.brand}</span> <br />
                    <span>{each.title}</span> <br />
                    <span>{each.price}</span> &nbsp;&nbsp;
                    <span>{each.rating}</span>


                </div> )

            })
        }
    </div>
  )
}

export default connect(store=>store) (Cart)