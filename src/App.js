import logo from './logo.svg';
import './App.css';
// import { Formik, useFormik } from 'formik';
import { Formik } from 'formik';


function App() { 
return (

<Formik
  initialValues = {{'fn':'','ln':'','age':''}}
  onSubmit={(fv)=>{console.log(fv);}}
  
  >
    {(userForm)=>{

      return (
        <form onSubmit={userForm.handleSubmit}>
          <input type='text' placeholder='Enter First Name' name='fn' onChange={userForm.handleChange} /> <br/>
          <input type='text' placeholder='Enter Last Name' name='ln' onChange={userForm.handleChange}/> <br/>
          <input type='text' placeholder='Enter Age Name' name='age' onChange={userForm.handleChange}/> <br/> <br/>
          <button type='sudmit'>save</button>
        </form>
      )   
    }
  } 
</Formik>
)






  // var userForm = useFormik({
  //   initialValues : {'fn':'','ln':'','age':''},
  //   onSubmit:(fv)=>{console.log(fv);}
  // })
  // return (
  //   <div >
  //     {
  //     <form onSubmit={userForm.handleSubmit} >
  //         <label>First Name :</label>
  //         <input name='fn' type='text' placeholder='Enter first name' onChange={userForm.handleChange}/> <br/>
  //         <label>Last Name :</label>
  //         <input name='ln' type='text' placeholder='Enter last name' onChange={userForm.handleChange}/> <br/>
  //         <lable>Age :</lable >
  //         <input  age='age' type='text' placeholder='Enter your age' onChange={userForm.handleChange}/> <br/>
  //         <button type='submit'>Save</button>
  //     </form>
  //     }
  //   </div>
  // );
}

export default App;
 