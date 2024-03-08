import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { useFormik } from "formik";
import store from "./store/store";
import * as Yup from 'yup'


function RegForm(props) {

  const validations = Yup.object({
    "fullname" : Yup.string().required('Write Your Name'),
    "phone" :Yup.string().required('required mobile number').length(10,'Enter Valid number'),
    "email" :Yup.string().required('Enter valid mail').email(),
    "course":Yup.array().required('select atleast one'),
    'mode':Yup.string().required('select atleast one'),
    "selectdate":Yup.string().required('select the date'),
    "interest" :Yup.string().required('say your interest'),
    "remark":Yup.string().required('write remarks'),
    "nextcalldate":Yup.string().required('slect next call date')
  })
  let userformik = useFormik({
    initialValues :{
      "fullname":'',
      "phone":'',
      "email":'',
      "course":'',
      "mode":'',
      "selectdate":'',
      "interest":'',
      "remark":'',
      "nextcalldate":''
    },
    onSubmit :(values)=>{
        props.dispatch({type:'add',payload:values})
    },
    validationSchema : validations 

  })
  console.log(userformik);

  // console.log(formik); 
  return (
    
      <form className="row bg-light main" onSubmit={userformik.handleSubmit}>
      <div className="d-flex w-100 p-5">
        <div className="w-50 p-3">
          {" "}
          <h3 class="text-primary d-flex justify-content-center"> <b>ENQUIRY FORM</b></h3>

          <div className="d-flex">
          <div class="form-floating col-md-6 m-2 ">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="name"
              name="fullname"
              onChange={userformik.handleChange}
            />
            {userformik.errors.fullname && <span style={{color:'red'}}>{userformik.errors.fullname}</span>}
            <label className="text-primary" for="floatingInput"> <b class='opacity-'>  Name </b> </label>
          </div>
          <div class=" form-floating col-6 m-2">
            <input
              type="text"
              class="form-control"
              id="phoneno"
              placeholder="phoneno"
              name='phone'
              onChange={userformik.handleChange}
            />
             {userformik.errors.phone && <span style={{color:'red'}}>{userformik.errors.phone}</span>}
            <label className="text-primary" for="floatingInput"> <b>Phone</b></label>
          </div>

          </div>
          <div class="form-floating col-12 m-2">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              name='email'
              onChange={userformik.handleChange}
            />
             {userformik.errors.email && <span style={{color:'red'}}>{userformik.errors.email}</span>}
            <label className="text-primary" for="floatingInput"> <b>Email address</b></label>
          </div>
          <div className="d-flex ">
            <div className="m-2">
              <span className="text-primary"> <b> Course</b></span>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="FrontEnd With React"
                  id="flexCheckDefault"
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label " for="flexCheckDefault">
                  FrontEnd With React
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Backend With Angular"
                  id="flexCheckChecked"
                  name='course'
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Backend With Angular
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Fullstack JAVA"
                  id="flexCheckChecked"
                  name='course'
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Fullstack JAVA
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="MEAN"
                  id="flexCheckChecked"
                  name='course'
                  onChange={userformik.handleChange}
                  
                />
                <label class="form-check-label" for="flexCheckChecked">
                  MEAN
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="  MERN"
                  id="flexCheckChecked"
                  name='course'
                  onChange={userformik.handleChange}
                  
                />
                <label class="form-check-label" for="flexCheckChecked">
                  MERN
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value="Devops"
                  id="flexCheckChecked"
                  name='course'
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Devops
                </label> <br />
                {userformik.errors.course && <span style={{color:'red'}}>{userformik.errors.course}</span>}

              </div>
            </div>

            <div className=" m-2">
            <span className="text-primary "><b>Mode</b> </span>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="mode"
                  value='offline'
                  id="flexRadioDefault1"
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  offline
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="mode"
                  value='online'
                  id="flexRadioDefault2"
                  onChange={userformik.handleChange}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  online
                </label> <br />
                {userformik.errors.mode && <span style={{color:"red"}}>{userformik.errors.mode}</span>}

              </div>
            </div>
          </div>
        </div>

        <div class="w-50 p-3">
          <h3 class="text-primary d-flex justify-content-center"> <b>FEEDBACK</b> </h3>
          <div class="d-flex">
          <div class=" form-floating col-md-6 m-2">
            <input
              type="date"
              class="form-control"
              id="phoneno"
              placeholder="phoneno"
              name='selectdate'
              onChange={userformik.handleChange}
            />
            <label className="text-primary" for="floatingInput"><b>Date</b> </label>
            {userformik.errors.selectdate && <span style={{color:'red'}}>{userformik.errors.selectdate}</span>}
          </div>
          <div class=" form-floating col-md-6 m-2">
            <select class="form-select" name='interest' onChange={userformik.handleChange}>
              <option selected disabled>Choose An Option</option>
              <option value="Interested"   >Interested</option>
              <option value="Not Interested"  >Not Interested</option>
            </select>
            <label htmlFor="" class="text-primary"> <b>Interested</b> </label>
            {userformik.errors.interest && <span style={{color:'red'}}>{userformik.errors.interest}</span>}
          </div>
          </div>
          <div class=" form-floating col-md-12 m-2">
            <input
              type="text"
              class="form-control"
              id="phoneno"
              placeholder="phoneno"
              name='remark'
              onChange={userformik.handleChange}
            />
            <label className="text-primary" for="floatingInput"> <b>Remarks </b> </label>
            {userformik.errors.remark && <span style={{color:'red'}}>{userformik.errors.remark}</span>}
          </div>
          <div class=" form-floating col-md-12 m-2">
            <input
              type="date"
              class="form-control"
              id="phoneno"
              placeholder="phoneno"
              name='nextcalldate'
              onChange={userformik.handleChange}
            />
            <label className="text-primary" for="floatingInput"> <b>Next Call Date</b> </label>
            {userformik.errors.nextcalldate && <span style={{color:'red'}}>{userformik.errors.nextcalldate}</span>}
          </div>
        </div>
        </div>
        <div class="col-12 d-flex justify-content-center">  
        <button type="submit" class="btn btn-primary btn-lg w-5">Save</button>
        </div>
      </form>  
  );
}

export default connect((store) => store)(RegForm);
