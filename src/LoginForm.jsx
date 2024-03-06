import React from 'react'
import { useFormik } from 'formik';

function LoginForm(values) {


  let formik = useFormik({
    initialValues : {
        firstname:'',
        password:'',
       
    },
  
    onSubmit:(values)=>{
        console.log(values);
    }
    
})
console.log(formik);

return (
<div><br /><br />
    <h1> Customer Login Form </h1><br /><br />
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">UserName :</label>
        <input type="text" name="firstname" id="" onChange={formik.handleChange} /> <br /><br />
        <label htmlFor="">Password :</label>
        <input type="password" name="password" id="" onChange={formik.handleChange}/> <br /><br />
        <button type='submit'>Login</button>
    </form>
</div>

)}

export default LoginForm

