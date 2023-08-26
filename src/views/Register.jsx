import {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import country from 'countries-list';
import { register } from '../redux/features/apiCalls/user';
import { getCountries } from '../utils/countries';
import './Register.css';

const Register = () => {
  const dispatch = useDispatch()

  const countriesList = getCountries(country.countries)

  const [userBio, setUserBio] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    countryOfOrigin: '',
    gender: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    countryOfResidence: '',
    zipCode: ''
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserBio((prev) => {
      return {...prev, [name] : value}
    })
  }

  return (
    <div id="register">
      <div id="registerImage"></div>
      <div id="registerForm">
        <div className="formDiv">
          <h2>Register New Account</h2>
          <p>Welcome!! Create a New Account</p>
          <form action="" className='basicKyc'>
              <div>
                <label>Enter First Name</label>
                <input onChange={(e) => handleChange(e)} name='firstName' type="text" placeholder="Enter First Name"/>
              </div>
              <div>
                <label>Enter Last Name</label>
                <input onChange={(e) => handleChange(e)} name='lastName' type="text" placeholder="Enter Last Name"/>
              </div>
              <div>
                <label>Enter Email</label>
                <input onChange={(e) => handleChange(e)} name='email' type="text" placeholder="Enter Email"/>
              </div>
              <div>
                <label>Enter Password</label>
                <input onChange={(e) => handleChange(e)} name='password' type="text" placeholder="Enter Password"/>
              </div>
              <div>
                <label>Confirm Password</label>
                <input onChange={(e) => handleChange(e)} name='confirmPassword' type="text" placeholder="Confirm Password"/>
              </div>
              <div>
                <label>Date of Birth</label>
                <input onChange={(e) => handleChange(e)} name='dateOfBirth' type="text" placeholder="Format: dd-mm-yyyy"/>
              </div>
              <div>
                <label>Country of Origin</label>
                <select onChange={(e) => handleChange(e)} name='countryOfOrigin'>
                  <option disabled value="">Select Country of Origin</option>
                  {Object.values(countriesList).map((country, index) =>
                     <option key={index}>{country.name}   {country.emoji}</option>
                  )}
                </select>
              </div>
              <div>
                <label>Gender</label>
                <input onChange={(e) => handleChange(e)} type="text" name='gender' placeholder="Gender"/>
              </div>
            </form>
            <h3>Residential Details</h3>
            <form className="addressAndMore">
              <div>
                <label>Main Address</label>
                <input onChange={(e) => handleChange(e)} name='addressOne' type="text" placeholder="Address 1" id="address1"/>
              </div>
              <div>
                <label>Other Address</label>
                <input onChange={(e) => handleChange(e)} name='address' type="text" placeholder="Address 2" id="address2"/>
              </div>
              <div>
                <label>City</label>
                <input onChange={(e) => handleChange(e)} name='city' type="text" placeholder="City"/>
              </div>
              <div>
                <label>State</label>
                <input onChange={(e) => handleChange(e)} name='state' type="text" placeholder="State"/>
              </div>
              <div>
                <label>Enter Zip Code</label>
                <input onChange={(e) => handleChange(e)} name='zipCode' type="text" placeholder="ZIP Code"/>
              </div>
              <div>
                <label>Country of Residence</label>
                <select onChange={(e) => handleChange(e)} name='countryOfResidence'>
                  <option disabled value="Select Country">Select Country of Residence</option>
                  {Object.values(countriesList).map((country, index) =>
                    <option key={index}>{country.name} {country.emoji}</option>
                  )}
                </select>
              </div>
              <Link onClick={() => dispatch(register(userBio))} id="registerSubmit">Register</Link>
            <p id='user_signin'>Have an Account? <Link to="/login" id="rSignIn">Sign In</Link></p>
            <p>Register as&nbsp;<Link to="/admin/register" id='rSignIn'>Admin</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
