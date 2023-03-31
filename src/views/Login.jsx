import {useState} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const change = (arg, e) => {
    arg(e.target.value)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const data = {email, password} //eslint-disable-line

  return (
    <section className="loginPage">
<div id="loginImage">
        <img src="/landing/login.png" alt="Login"/>
      </div>
      <div id="loginForm">
        <form>
          <h1>Login here</h1>
          <p>Welcome back. Login to your Account</p>
          <input onChange={(e) => change(setEmail, e)} type="email" name="" id="loginMail" placeholder='Enter your Email'/>
          <input onChange={(e) => change(setPassword, e)} type="password" name="" id="loginPassword" placeholder='Enter your Password'/>
          <Link to="/account/dashboard" id="loginSubmit">Login</Link>
<span className="remember"><input type="checkbox" name="remember" id=""/><p id="remain">Remember Me</p>
  <Link to="/forgot_password" id="forgot">Forgot Password?</Link></span>
<p>Don't have an Account? <Link to="/register" id="loginCreate">Create One</Link></p>
<p>Login as&nbsp;<Link to="/admin/login" id='loginCreate'>Admin</Link></p>
    </form>
      </div>
    </section>
  )
}

export default Login;
