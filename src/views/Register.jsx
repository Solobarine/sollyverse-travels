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
              <div>
              <label>Enter First Name</label>
              <input type="text" placeholder="Enter First Name"/>
    </div>
    <div>
    <label>Enter Last Name</label>
              <input type="text" placeholder="Enter Last Name"/>
    </div>
    <div>
    <label>Enter Phone Number</label>
              <input type="number" name="phoneNo" placeholder='Enter Phone Number'/>
    </div>
    <div>
    <label>Enter Email</label>
              <input type="text" placeholder="Enter Email"/>
    </div>
    <div>
    <label>Enter Password</label>
              <input type="text" placeholder="Enter Password"/>
    </div>
    <div>
    <label>Confirm Password</label>
              <input type="text" placeholder="Confirm Password"/>
    </div>
    <div>
    <label>Date of Birth</label>
              <input type="text" placeholder="Date of Birth"/>
    </div>
    <div>
    <label>Country of Origin</label>
              <select>
                <option disabled value="">Select Country of Origin</option>
              </select>
    </div>
    <div>
    <label>Gender</label>
              <input type="text" placeholder="Gender"/>
    </div>
            </div>
            <div className="addressAndMore">
              <h2>Address</h2>
    <div>
    <label>Main Address</label>
              <input type="text" placeholder="Address 1" id="address1"/>
    </div>
    <div>
    <label>Other Address</label>
              <input type="text" placeholder="Address 2" id="address2"/>
    </div>
    <div>
    <label>City</label>
              <input type="text" placeholder="City"/>
    </div>
    <div>
    <label>State</label>
              <input type="text" placeholder="State"/>
    </div>
    <div>
    <label>Enter Zip Code</label>
              <input type="text" placeholder="ZIP Code"/>
    </div>
    <div>
    <label>Country of Residence</label>
              <select>
                <option disabled value="Select Country">Select Country of Residence</option>
              </select>
    </div>
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
