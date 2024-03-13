import React from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

function Cart(props) {

    function inc(each){
        
    }
        
    function dec(){
            
    }
  return (
    <div class='d-flex'>
    <div class='d-flex flex-wrap flex-coloun w-50'>
        {
            props.prod.addcart.map((each)=>{
                return ( <div class='d-flex flex-coloun shadow rounded m-4 ms-5 align-items-center justify-content-center iterativediv'>
                   
                    <img className='cartimg' src={each.images[0]} alt="" /> 
                    <div className='ms-4'> 
                    <span>{each.brand} - </span> 
                    <span>{each.title}</span> <br /> <br />
                    <span>Price :<i class="bi bi-currency-rupee"></i> {each.price}</span> <br />  <br />
                    <span>Quantity : <button class='btn btn-info rounded' onClick={(each)=>{dec(each)}}>-</button > {each.quantity=1} <button class='btn btn-success rounded' onClick={(each)=>{inc(each)}}>+</button></span>
                    </div>
                </div> )

            })
        }
    </div>

    <div class='w-50 mt-3 ms-5'>
        <div class='border rounded p-5 pricediv'>
        <h1>Total Price </h1> <br />
        <h3>SubTotal ({props.prod.addcart.length}):-<i class="bi bi-currency-rupee"></i>{props.prod.addcart.reduce((accu,item)=>accu+item.price,0)}</h3><br />
        <div class='d-flex justify-content-center'>
        <button class='btn btn-warning rounded'>Proceed To Buy</button> <br />

        </div>
        </div>
      
    </div>
    </div>
  )
}

export default connect(store=>store) (Cart)