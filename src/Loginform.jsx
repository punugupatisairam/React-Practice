import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useFormik } from "formik";
import { connect } from "http2";

function LoginForm() {

    const userformik = useFormik({
        initialValues:{
            'fullname':'',
            'password':''
        },
        onSubmit :(values)=>{
            console.log(values);
        }
    })
  return (
    <div class='rounded shadow w-25 d-flex justify-content-center mdiv'>
      <form class="form-floating " onSubmit={userformik.handleSubmit}><br /> <br />
        <div class="form-floating mb-3 col-12">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            name='fullname'
            placeholder="name@example.com"
            onChange={userformik.handleChange}
          />
          <label for="floatingInput">User Name</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name='password'
            onChange={userformik.handleChange}
          />
          <label for="floatingPassword">Password</label>
        </div> <br /><br />
        <div class='d-flex justify-content-center'>
            <button class='btn btn-primary btn-lr' type="submit">Login</button>
        </div><br />
      </form>
    </div>
  );
}

export default  connect() (LoginForm);
