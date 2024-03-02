import React from 'react'


function LoginForm() {
    let formik = ({
        intialvalues:{
          firstname:'',
          password:''
        },
        onSubmit:((values)=>{
            console.log(values);
        })
    })
    
  return (
    <div>
      <form onSubmit={formik.onSubmit} >
          <label htmlFor="">Name :</label>
          <input type="text" onChange={formik. ()} />
          <label htmlFor="">Password :</label>
          <input type="text"  onChange={formik.onChange()} />
          <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginForm