import React from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart(props) {

    console.log(props);
  return (
    <div class='d-flex'>
    <div class='d-flex flex-wrap flex-coloun w-75'>
        {
            props.prod.addcart.map((each)=>{
                return ( <div class='d-flex shadow rounded w-50 h-25 m-4 ms-5 align-items-center justify-content-center'>
                   
                    <img className='cartimg' src={each.images[0]} alt="" /> 
                    <div>
                    <span>{each.brand} - </span>
                    <span>{each.title}</span> <br />
                    <span>Price :<i class="bi bi-currency-rupee"></i> {each.price}</span> <br />
                    <span>Quantity : <button class='btn btn-info rounded'>-</button >{1}<button class='btn btn-success rounded'>+</button></span>
                
                    </div>
                  


                </div> )

            })
        }
    </div>

    <div class='w-25 me-5 mt-3 '>
        <div class='border rounded w-100 p-5'>
        <h1>Total Price </h1> <br />
        <h2>SubTotal ({props.prod.addcart.length}):-<i class="bi bi-currency-rupee"></i>{props.prod.addcart.reduce((accu,item)=>accu+item.price,0)}</h2><br />
        <div class='d-flex justify-content-center'>
        <button class='btn btn-warning rounded'>Proceed To Buy</button> <br />

        </div>
        </div>
      
    </div>
    </div>
  )
}

export default connect(store=>store) (Cart)