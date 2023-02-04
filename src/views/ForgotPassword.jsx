import './ForgotPassword.css';

const ForgotPassword = () => {
  return (
    <section id="forgotPassword">
      <div id="forgotPasswordImage">
        <img src="/landing/password.jpg" alt="Key"/>
      </div>
      <div className="forgotPasswordForm">
        <form>
          <h1>Recover Your Password</h1>
          <input type="email" placeholder="Enter Your Email"/>
          <input type="submit" value="Recover Password"/>
        </form>
      </div>
    </section>
  )
}

export default ForgotPassword;
