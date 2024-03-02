import React from 'react'
import { useFormik } from 'formik';

function LoginForm(values) {


    let formik = useFormik({
      intialvalues:{
        firstname:'',
        password:''
      },
      onSubmit:((values)=>{
          console.log(values);
    }) 
    })
    console.log(formik);
  return (
    <div>
      <form onSubmit={formik.handleSubmit} >
          <label htmlFor="">Name :</label>
          <input type="text" name='firstname' onChange={formik.handleChange} /> <br /><br />
          <label htmlFor="">Password :</label>
          <input type="password" name='password' onChange={formik.handleChange} /> <br /><br /><br />
          <button type='submit'>Login</button>
      </form>
    </div>

  )


  

}

export default LoginForm

