import { useFormik } from 'formik'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import { spawn } from 'child_process';

function LoginForm() {
    const validations = Yup.object({
        username:Yup.string().required('Enter Your Name'),
        password:Yup.string().required('password required')
    })
    // console.log(validations);
    let userformik = useFormik({
        initialValues :{
           "username" :"",
           "password":"",

        },
        onSubmit:(values)=>{
            // console.log(values);

        },
        validationSchema:validations
    })
console.log(userformik);
    
  return (
    <div class=' shadow rounded mar'>
        <form onSubmit={userformik.handleSubmit} class='w-75' >
            <div class='form-floating mt-5'>
            <input type="text" class='form-control' placeholder='Enter Your Name' name="username" id="" onChange={userformik.handleChange}/>
            <label for="floatingInput" class='text-primary'>UserName</label>
            {userformik.errors.username && <span style={{color:'red'}}> {userformik.errors.username} </span>}
            </div><br /><br />
            <div class='form-floating'>
            <input type="password" class='form-control' placeholder='Enter Your Password' name="password" id="" onChange={userformik.handleChange}/>
            <label for="floatingInput" class='text-primary'>Password</label> 
            {userformik.errors.password && <span style={{color:'red'}}> {userformik.errors.password}</span>}

             </div><br /><br />
             <div class='d-flex justify-content-center'> 
             <Link to='/data'><button type='submit' class='btn btn-primary btn-lr rounded mb-4'>Login</button> </Link> 
             </div>
        </form>
    </div>
  )
}

export default LoginForm