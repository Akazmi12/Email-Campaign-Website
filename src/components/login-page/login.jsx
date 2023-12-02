import React from 'react'
import './login.css'
import loginLogo from '../../assets/dark-blue-logo.svg'
import { useFormik } from 'formik'
import { loginSchema } from '../../Validations/loginValidation'
import { Link } from 'react-router-dom'

export const Login = () => {
  const onSubmit = () =>{
    (false?window.alert("Login Sucess"):window.alert("Login Failed"))
  }
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema:loginSchema,
    onSubmit
  })
  console.log(errors);

  return (
    <div className='login-container'>
      <div className="login-logo">
        <img src={loginLogo} alt='SecureRIA'></img>
      </div>
      <div className="login-box">
        <div className="login-prompt">
          <div className="login-heading">
            <h1>Login into your account</h1>
          </div>
          <div className="login-para">
            <p>Gain access to your personalized profile and secure your digital
              identity with a single click.</p>
          </div>
          <div className="login-form">
              <form onSubmit={handleSubmit}>
                <input 
                type='email' 
                name='email' 
                placeholder='Email' 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}/>
                {errors.email && touched.email && <p className='input-error'>{errors.email}</p>}

                <input 
                type='password' 
                name='password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} 
                placeholder='Password'/>
                {errors.password && touched.password && <p className='input-error'>{errors.password}</p>}

                <div className="login-forgot-password">
                  Forgot Password?
                </div>
                <div className="login-button">
                  <button type='submit'>LOGIN</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}
