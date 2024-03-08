import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import RegForm from './RegForm'

function Headerform() {
  // var regbut = document.getElementById('reg')
  // regbut.style.display='none'

  // function addreg(){
  //   var regbut = document.getElementById('reg')
  //   regbut.style.display='inline-block'
  // }

  // function hidereg(){
  //   var regbut = document.getElementById('reg')
  //   regbut.style.display='none'
  // }
  return (
    <div>
      <div class='d-flex justify-content-between p-4'>
        <div class='imgdiv'>
        <img className='logo' src="https://edupoly.in/common/assets/edupoly-logo-light.png" alt="logo" />
        </div>
        <div class='d-flex justify-content-around'> 
        <Link to='/'><button id='reg' class='btn btn-primary rounded me-3' >Register</button></Link> 
        <Link to='details'><button class='btn btn-primary' >All Enquiries</button> </Link>  
        </div>
    </div>
   </div>

    

  )
}

export default Headerform