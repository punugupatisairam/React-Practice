import { useFormik } from 'formik'
import React from 'react'

function LoginForm() {
  let formik = useFormik({
    initialValues:{
      firstname :'',
      lastname :'',
      dob :''
    },
    onSubmit :((values)=>{
        console.log(values);
    })
  })
  return (
    <div>
    <h1> form handling using useFormik Hook </h1>
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="">firstname</label>
        <input type="text" name="firstname" id="" onChange={formik.handleChange} /> <br /><br />
        {/* <div>{formik.errors.firstname}</div> */}
        <label htmlFor="">lastname</label>
        <input type="text" name="lastname" id="" onChange={formik.handleChange}/> <br /><br />
        <label htmlFor="">Date Of Birth</label>
        <input type="text" name="dob" id="" onChange={formik.handleChange}/> <br /><br />
        {/* <div>{formik.errors.lastname}</div> */}

        <button type='submit'> Add Student </button>
    </form>
</div>
  )
}

export default LoginForm