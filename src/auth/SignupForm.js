import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik  } from "formik";
import { Button } from "react-bootstrap";


import './SignUpForm.css'
import SignUpValidation from "../common/ValidationSchema";

/** Signup form. */


function SignupForm({ signup }) {
const history = useHistory()

 async function onSubmit(evt) {
    evt.preventDefault();
    let result = await signup(values);
    if (result.success) {
      history.push("/companies");
    }
  }

 
const {values,handleChange, handleSubmit, errors, setFieldTouched, touched} = useFormik({
  initialValues:{
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:''
  },
  validationSchema:SignUpValidation,
  onSubmit,
})
 

  return (

     
  <>
  <div className='SignUp'>

    <form className="SignUpForm" onSubmit={onSubmit}>
      <div className="SignUpForm-heading">
      <h2>Sign Up</h2>
      <p className="lead">Please fill out the form.</p>

      </div>

    <label htmlFor="firstName">First Name</label>
  <input 
  type='text'
  id="firstName"
  name='firstName'
  autoCapitalize={'none'}
  placeholder='First Name'
  onChange={handleChange('firstName')}
  onBlur={() => setFieldTouched("firstName")}
  value={values.firstName}
  />

{touched.firstName && <p className="error-paragraph">{errors.firstName}</p>}


  
<label htmlFor="lastName">Last Name</label>
  <input 
  type='text'
  id="lastName"
  name='lastName'
  autoCapitalize={'none'}
  placeholder='Last Name'
  onChange={handleChange('lastName')}
  onBlur={() => setFieldTouched("lastName")}
  value={values.lastName}

  />
{touched.lastName && <p className="error-paragraph">{errors.lastName}</p>}

 

<label htmlFor="emial">Email</label>
  <input 
  type='email'
  id="email"
  name='email'
  autoCapitalize={'none'}
  placeholder='Email'
  onChange={handleChange('email')}
  onBlur={() => setFieldTouched("email")}
  value={values.email}

  />

{touched.email && <p className="error-paragraph">{errors.email}</p>}


  <label htmlFor="username">Username</label>
  <input 
  type='text'
  id="username"
  name="username"
  autoCapitalize={'none'}
  placeholder='Username'
  onChange={handleChange('username')}
  onBlur={() => setFieldTouched("username")}
  value={values.username}

  />
  {touched.username && <p className="error-paragraph">{errors.username}</p>}


<label htmlFor="password">Password</label>
  <input 
  type='password'
  id="password"
  name='password'
  autoCapitalize={'none'}
  placeholder='Password'
  onChange={handleChange('password')}
  onBlur={() => setFieldTouched("password")}
  value={values.password}

  />
  {touched.password && <p className="error-paragraph">{errors.password}</p>}


<Button type="submit" variant='dark' onClick={onSubmit}>SIGN UP</Button>
</form>

  </div>
  </> 

  );
}

export default SignupForm;