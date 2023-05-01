import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/apiCalls/user'
import './Login.css';

const Login = () => {
  const change = (arg, e) => {
    arg(e.target.value)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  let is_logged_in = useSelector(state => state.user.login)
  const error = useSelector(state => state.user.error)
  const navigate = useNavigate()
  const payload = {email, password}

  return (
    <section className="loginPage">
      <div id="loginImage">
        <img src="/user_login.png" alt="Login"/>
      </div>
      <div id="loginForm">
        <form>
          <h1>Login here</h1>
          <p>Welcome back. Login to your Account</p>
          <p id="error">{error.error}</p>
          <input onChange={(e) => change(setEmail, e)} type="email" name="" id="loginMail" placeholder='Enter your Email'/>
          <input onChange={(e) => change(setPassword, e)} type="password" name="" id="loginPassword" placeholder='Enter your Password'/>
          <Link onClick={(e) => {
            e.preventDefault()
            dispatch(login(payload)).then((res) => {
              if (res.payload.user) is_logged_in = true
              if (is_logged_in) navigate("/account/dashboard")
              })
            }} id="loginSubmit">Login</Link>
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
