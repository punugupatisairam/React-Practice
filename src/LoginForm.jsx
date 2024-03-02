import React from 'react'


function LoginForm(values) {
    let formik = ({
        intialvalues:{
          firstname:'',
          password:''
        },
        onsubmit:((values)=>{
            console.log(values);
        })
    })
    console.log(formik);
  return (
    <div>
      <form onSubmit={formik.handlesubmit} >
          <label htmlFor="">Name :</label>
          <input type="text" name='firstname' onChange={formik.handlechange} /> <br /><br />
          <label htmlFor="">Password :</label>
          <input type="text" name='password' onChange={formik.handlechange} /> <br /><br /><br />
          <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm