import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import country from 'countries-list';
import { register } from '../redux/features/apiCalls/user';
import {useEffect, useState} from 'react';

const Register = () => {
  const countriesList = country.countries

  const change = (arg, e) => {
    arg(e.target.value)
  }

  const navigate = useNavigate()
  const is_logged_in = useSelector(state => state.user.login)
//  useEffect(() => {
//   if (!is_logged_in) navigate('/login')
//  })
  const dispatch = useDispatch()

  // Input States
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [gender, setGender] = useState('')

  const [addressOne, setAddressOne] = useState('')
  const [addressTwo, setAddressTwo] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [countryOfResidence, setCountryOfResidence] = useState('')

  const data = { firstName, lastName, phoneNumber, email, password,
    confirmPassword, dateOfBirth, countryOfOrigin, gender,
    addressOne, addressTwo, city, state, zipCode, countryOfResidence }

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
                <input onChange={(e) => change(setFirstName, e)} type="text" placeholder="Enter First Name"/>
              </div>
              <div>
                <label>Enter Last Name</label>
                <input onChange={(e) => change(setLastName, e)} type="text" placeholder="Enter Last Name"/>
              </div>
              <div>
                <label>Enter Phone Number</label>
                <input onChange={(e) => change(setPhoneNumber, e)} type="text" name="phoneNo" placeholder='Enter Phone Number'/>
              </div>
              <div>
                <label>Enter Email</label>
                <input onChange={(e) => change(setEmail, e)} type="text" placeholder="Enter Email"/>
              </div>
              <div>
                <label>Enter Password</label>
                <input onChange={(e) => change(setPassword, e)} type="text" placeholder="Enter Password"/>
              </div>
              <div>
                <label>Confirm Password</label>
                <input onChange={(e) => change(setConfirmPassword, e)} type="text" placeholder="Confirm Password"/>
              </div>
              <div>
                <label>Date of Birth</label>
                <input onChange={(e) => change(setDateOfBirth, e)} type="text" placeholder="Format: dd-mm-yyyy"/>
              </div>
              <div>
                <label>Country of Origin</label>
                <select onChange={(e) => change(setCountryOfOrigin, e)}>
                  <option disabled value="">Select Country of Origin</option>
                  {Object.values(countriesList).map((country, index) =>
                     <option key={index}>{country.emoji} {country.name}</option>
                  )}
                </select>
              </div>
              <div>
                <label>Gender</label>
                <input onChange={(e) => change(setGender, e)} type="text" placeholder="Gender"/>
              </div>
            </form>
            <h3>Residential Details</h3>
            <form className="addressAndMore">
              <div>
                <label>Main Address</label>
                <input onChange={(e) => change(setAddressOne, e)} type="text" placeholder="Address 1" id="address1"/>
              </div>
              <div>
                <label>Other Address</label>
                <input onChange={(e) => change(setAddressTwo, e)} type="text" placeholder="Address 2" id="address2"/>
              </div>
              <div>
                <label>City</label>
                <input onChange={(e) => change(setCity, e)} type="text" placeholder="City"/>
              </div>
              <div>
                <label>State</label>
                <input onChange={(e) => change(setState, e)} type="text" placeholder="State"/>
              </div>
              <div>
                <label>Enter Zip Code</label>
                <input onChange={(e) => change(setZipCode, e)} type="text" placeholder="ZIP Code"/>
              </div>
              <div>
                <label>Country of Residence</label>
                <select onChange={(e) => change(setCountryOfResidence, e)}>
                  <option disabled value="Select Country">Select Country of Residence</option>
                  {Object.values(countriesList).map((country, index) =>
                    <option key={index}>{country.emoji}  {country.name}</option>
                  )}
                </select>
              </div>
              <Link onClick={(e) => {
                e.preventDefault()
                dispatch(register(data)).then(() => {
                if (is_logged_in) navigate("/account/dashboard")
                })
              }}
                id="registerSubmit"
                >Register</Link>
            <p id='user_signin'>Have an Account? <Link to="/login" id="rSignIn">Sign In</Link></p>
            <p>Register as&nbsp;<Link to="/admin/register" id='rSignIn'>Admin</Link></p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
