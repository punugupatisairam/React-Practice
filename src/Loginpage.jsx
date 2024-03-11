import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Loginpage(props) {
    console.log(props);
    const validations = ()=>({
        fullname :Yup.string().required('Enter Your Name'),
        password :Yup.string().required('Enter Your Password')
    })
       
    
    const userformik = useFormik({
        initialValues:{
            'fullname':'',
            'password':''
        },
        onSubmit :(values)=>{
            props.dispatch({type:"ADDED",payload:values})
        },
        validationSchema:Yup.object(validations())
    })
  return (
    <form onSubmit={userformik.handleSubmit}> 
    <div class='rounded shadow  w-25 mdiv'> <br />
       <div class="form-floating m-5">
        <input type="text" class="form-control" id="floatingInput" name='fullname' placeholder="Enter Your Name" onChange={userformik.handleChange}/>
        <label class='text-primary' for="floatingInput">UserName</label>
        {userformik.errors.fullname &&  <span style={{color:'red'}}>{userformik.errors.fullname}</span> }
    </div>
    <div class="form-floating m-5">
        <input type="password" class="form-control" id="floatingPassword" name='password' placeholder="Password" onChange={userformik.handleChange}/>
        <label class='text-primary' for="floatingPassword">Password</label>
        {userformik.errors.password &&  <span style={{color:'red'}}>{userformik.errors.password}</span> }

    </div>
        <div class='d-flex justify-content-center'>
           <Link to='products' ><button class='btn btn-primary btn-ls' type='submit'>Login</button></Link> 
        </div> <br />
    </div>
    </form>
  )
}

export default connect(store=>store) (Loginpage)