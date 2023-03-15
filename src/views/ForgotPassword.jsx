import {useState} from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const data = {email} //eslint-disable-line
  return (
    <section id="forgotPassword">
      <div id="forgotPasswordImage">
        <img src="/landing/password.jpg" alt="Key"/>
      </div>
      <div className="forgotPasswordForm">
        <form>
          <h1>Recover Your Password</h1>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Your Email"/>
          <input type="submit" value="Recover Password"/>
        </form>
      </div>
    </section>
  )
}

export default ForgotPassword;
