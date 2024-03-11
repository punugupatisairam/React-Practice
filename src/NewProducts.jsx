import React from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

function NewProducts(props) {
    console.log(props);
  return (
    <div class='d-flex justify-content-center flex-wrap'>
        {
            props.newproducts.newproducts.map((each)=>{
                return (<div class='w-25 m-2 shadow rounded'>
                    <img src={each.images[0]} alt="" /> <br />
                     <span>Brand :{each.brand}</span> <br />
                     <span>Title :{each.title}</span> <br />
                     <span>Price :{each.price}</span> &nbsp;&nbsp;&nbsp;
                     <span>Rating :{each.rating}</span>

                </div>

                )
            })
        }
    </div>
  )
}

export default connect(store=>store) (NewProducts)