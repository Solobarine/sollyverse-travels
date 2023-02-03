import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <section className="loginPage">
<div id="loginImage">
        <img src="/landing/login.png" alt="Login Image"/>
      </div>
      <div id="loginForm">
        <form>
          <h1>Login here</h1>
          <p>Welcome back. Login to your Account</p>
          <input type="email" name="" id="loginMail" placeholder='Enter your Email'/>
          <input type="password" name="" id="loginPassword" placeholder='Enter your Password'/>
          <input type="submit" value="Submit" id="loginSubmit"/>
<span className="remember"><input type="checkbox" name="remember" id=""/><p id="remain">Remember Me</p>
  <Link to="/forgot_password" id="forgot">Forgot Password?</Link></span>
<p>Don't have an Account? <Link to="/register" id="loginCreate">Create One</Link></p>
    </form>
      </div>
    </section>
  )
}

export default Login;
