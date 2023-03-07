import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { adminlogin } from './AdminSlice';
import { useDispatch } from "react-redux";
import BASE_URL from '../API/Config';
import 'react-toastify/dist/ReactToastify.css';



const Adminlogin = () => {
  const [passwordType, setPasswordType] = useState("password")
  const [error,setError] = useState('');

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const togglePassword = () => {
      if(passwordType === "password"){
        setPasswordType("text")
        return;
      }
      setPasswordType("password")
    };


    const AdminErrorToast = () => {
      toast.error("Invalid Email/password !")
    }

    const AdminSuccessToast = () => {
      toast.success("Successfully Login")
    }

    const SignupSchema = Yup.object().shape({
      email: Yup.string()
        // .min(10, 'mobile number should be 10 digit')
        // .max(15, 'max 15 digit mobile number')
        .email("Invalid email address format")
        .required('Please enter Email ID'),
      password: Yup.string()
        .min(3, 'password should be minimum 3 character')
        // .max(6, 'password must be max 6 characters')
        .required('Please enter password'),
      // email: Yup.string().email('Invalid email').required('Required'),
    });

  return (
  
   <div className="page page-center">
      <ToastContainer
    autoClose={1000}
    position="top-center"
    hideProgressBar
    className="toast-container"
    toastClassName="dark-toast"
    theme="colored"
    toastStyle={{ backgroundColor: '#1a48aa' }}
  />
  <div className="container container-tight py-4">
    <div className="text-center mb-4">
      <a href="." className="navbar-brand "><img  src='BlueCarWash.png' width={240} height={240} /* src="./static/logo.svg" height={36} */  alt='' /></a>
    </div>
    <div className="card card-md">
      <div className="card-body">
        <h2 className="h2 text-center mb-4">Admin Login </h2>
        <div className="text-center"  style={{ color: '#9D0305',fontSize:'14px',marginBottom:'10px',marginTop:'-15px' }}>{error}</div>
         <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                  console.log(values.email);
                  axios({
                    url: `${BASE_URL}login`,
                    method: 'POST',
                    data: {
                      email: values.email,
                      password: values.password,
                    }

                  }).then((Response) => {
                    
                    console.log(Response)                    
                    const Adminlogintoken = Response.data.token
                    dispatch(adminlogin(Adminlogintoken))
                    console.log(Response.data.token); 
                    AdminSuccessToast();                    
                    setTimeout(() => {
                     navigate('/Dashboard')
                    }, 2000)
                   
                  }).catch((error) => {
                    console.log(error)
                    console.log(error.response.data.message)  
                    setError(error.response.data.message)                                      
                       AdminErrorToast();
                    
                  })
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="input-group mb-3">
                      <Field name="email" className="form-control" placeholder="Enter Email" />
                    </div>
                    {errors.email && touched.email ? (
                      <div className="" style={{ color: '#9D0305',fontSize:'14px',marginBottom:'10px',marginTop:'-15px' }}>{errors.email}</div>
                    ) : null}
                     <div className="input-group mb-3">
                      <Field name="password" className="form-control" type={passwordType==="password" ? "password" : "text"} placeholder="Password" />                     
                        <div className="input-group-text" onMouseDown={togglePassword}>
                          {passwordType==="password" ? <i className="fas fa-eye-slash"  /> :<i className="fas fa-eye"  />}                       
                      </div>                     
                    </div>
                    {errors.password && touched.password ? (
                      <div className=""  style={{ color: '#9D0305',fontSize:'14px',marginBottom:'10px',marginTop:'-15px' }}>{errors.password}</div>
                    ) : null}
                        <div className="form-footer">
                       <button type="submit" className="btn  w-100" style={{backgroundColor: '#1a48aa' , color:'white'}}>Sign in</button>
                </div>
                  </Form>
                )}
              </Formik>
      </div>  
    </div>   
  </div>
</div>

  )
}

export default Adminlogin
