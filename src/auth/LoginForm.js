import React,{useState} from "react";
import { useHistory, Link} from "react-router-dom";
import { Button } from "react-bootstrap";
import { useFormik } from "formik";


import LoginValidation from "../common/ValidationSchema";
import './LoginForm.css'


/** Login form.*/

function LoginForm({ login }) {
  const history = useHistory();
  const [error,setError] = useState('')
  

  async function onSubmit(evt) {
    evt.preventDefault();
    let result = await login(values);
    if (result.success) {
      history.push("/companies");
    }else{
      setError('You have to Sign Up first')
    }
  }


  const {values,handleChange, handleSubmit, errors, setFieldTouched, touched} = useFormik({
    initialValues:{
      username:''
    },
    validationSchema:LoginValidation,
    onSubmit,
  })



  return (
        
  <>
  <div className='Login'>

    <form className="LoginForm" onSubmit={onSubmit}>
      <div className="LoginForm-heading">
        {error && <p className="error-paragraph">{error} <Link to={'/signup'}>Sign Up</Link></p>}
      <h2>Login</h2>
      <p className="lead">Please fill out the form.</p>

      </div>


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


<Button type="submit" variant='warning' onClick={onSubmit}>LOGIN</Button>
</form>

  </div>
  </> 

  );
}

export default LoginForm;
