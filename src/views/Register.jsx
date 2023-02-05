import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div id="register">
      <div id="registerImage"></div>
      <div id="registerForm">
        <div className="formDiv">
          <h2>Register New Account</h2>
          <p>Welcome!! Create a New Account</p>
          <form action="">
            <div className="basicKyc">
              <input type="text" placeholder="Enter FirstName"/>
              <input type="text" placeholder="Enter LastName"/>
              <input type="number" name="phoneNo" placeholder='Enter Mobile Number'/>
              <input type="text" placeholder="Enter Email"/>
              <input type="text" placeholder="Enter Password"/>
              <input type="text" placeholder="Confirm Password"/>
              <input type="text" placeholder="Date of Birth"/>
              <input type="text" placeholder="Nationality"/>
              <input type="text" placeholder="Gender"/>
            </div>
            <div className="addressAndMore">
              <h2>Address</h2>
              <input type="text" placeholder="Address 1" id="address1"/>
<input type="text" placeholder="Address 2" id="address2"/>
              <input type="text" placeholder="City"/>
              <input type="text" placeholder="State"/>
              <input type="text" placeholder="ZIP Code"/>
              <input type="text" placeholder="Country"/>
            </div>
            <Link to="/account/dashboard" id="registerSubmit">Register</Link>
            <p>Have an Account? <Link to="/login" id="rSignIn">Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
