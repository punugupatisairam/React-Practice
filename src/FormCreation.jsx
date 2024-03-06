import React from 'react'
import { useFormik } from 'formik'


function FormCreation() {
    let formik = useFormik({
        initialValues :{
            username:'',
            password:''
        },
        
        onSubmit:((values)=>{
            console.log(values);
        }),
        onReset : (()=>{
            formik.resetForm();
        })
    }) 
  return (
    <div>
        <form onSubmit={formik.handleSubmit} >
            <label htmlFor="">UserName</label>
            <input type="text" name="username" id="" onChange={formik.handleChange}/> <br /><br />
            <label htmlFor="">Password</label>
            <input type="password" name='password'onChange={formik.handleChange} /> <br /><br />

            <button type='submit'>Login</button>
            <button type='reset'>Reset</button>
        </form>
    </div>
  )
}

export default FormCreation