import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useFormik } from 'formik'
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function Loginpage(props) {
    const navigate = useNavigate()
    console.log(props);

    const validations = () => ({
        fullname: Yup.string().required('Enter Your Name'),
        password: Yup.string().required('Enter Your Password')
    })

    const userformik = useFormik({
        initialValues: {
            fullname: '',
            password: ''
        },
        onSubmit: (values) => {
            props.dispatch({ type: "ADDED", payload: values })
            navigate('/products'); // Navigate after successful submission
        },
        validationSchema: Yup.object(validations())
    })

    return (
        <form onSubmit={userformik.handleSubmit}>
            <div className='rounded shadow w-25 mdiv'> <br />
                <div className="form-floating m-5">
                    <input type="text" className="form-control" id="floatingInput" name='fullname' placeholder="Enter Your Name" onChange={userformik.handleChange} onBlur={userformik.handleBlur} />
                    <label className='text-primary' htmlFor="floatingInput">UserName</label>
                    {userformik.touched.fullname && userformik.errors.fullname && <span style={{ color: 'red' }}>{userformik.errors.fullname}</span>}
                </div>
                <div className="form-floating m-5">
                    <input type="password" className="form-control" id="floatingPassword" name='password' placeholder="Password" onChange={userformik.handleChange} onBlur={userformik.handleBlur} />
                    <label className='text-primary' htmlFor="floatingPassword">Password</label>
                    {userformik.touched.password && userformik.errors.password && <span style={{ color: 'red' }}>{userformik.errors.password}</span>}
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary btn-ls' type='submit'>Login</button>
                </div> <br />
            </div>
        </form>
    )
}

export default connect(store => store)(Loginpage)
