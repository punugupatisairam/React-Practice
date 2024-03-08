import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import RegForm from './RegForm'

function Headerform() {
  return (
    <div>
      <div class='d-flex justify-content-between p-4'>
        <div class='imgdiv'>
        <img className='logo' src="https://edupoly.in/common/assets/edupoly-logo-light.png" alt="logo" />
        </div>
        <Link to='details'><button class='btn btn-primary '>All Enquiries</button> </Link>  
    </div>

    <div>
      <RegForm></RegForm>
    </div>
       </div>

    

  )
}

export default Headerform