import {useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { register } from '../redux/features/apiCalls/user';
import { getCountryList } from '../utils/countries';
import { registerSchema } from '../utils/register';
import { basicKyc, residentialInfo } from '../utils/register';
import './css/Register.css';

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  useEffect(() => {
    if (user.isLoggedIn) navigate('/dashboard')
  }, [user, navigate])
  
  let [countries, setCountries] = useState([])
  // let [residenceCountryISO, setResidenceCountryISO] = useState('')
  // let [states, setStates] = useState([])
  // let [stateISO, setStateISO] = useState('')
  // let [cities, setCities] = useState([])

  
  useEffect(() => {
    const getCountry = async() => {
      try {
        setCountries(await getCountryList())
      } catch (error) {
        return []
      }
    }
    getCountry()
  }, [countries.length])
  
  // useEffect(() => {
  //   const getState = async() => {
  //     if (residenceCountryISO !== '') {
  //     setStates(await getStateByCountry(residenceCountryISO))
  //   }
  //   }
  //   try {
  //     getState()
  //   } catch (error) {
  //     return []
  //   }
  // }, [residenceCountryISO])

  // useEffect(() => {
  //   const getState = async() => {
  //     if (stateISO !== '') {
  //       setCities(await getCitiesByStateAndCountry(residenceCountryISO, stateISO))
  //     }
  //   }
  //   try {
  //     getState()
  //   } catch (error) {
  //     return []
  //   }
  // }, [residenceCountryISO, stateISO])
  
  return (
    <div id="register">
      <div id="registerImage"></div>
      <div id="registerForm">
        <div className="formDiv">
          <h2>Register New Account</h2>
          <p>Welcome!! Create a New Account</p>
          <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dateOfBirth: '',
            gender: '',
            countryOfOrigin: '',
            addressOne: '',
            addressTwo: '',
            countryOfResidence: '',
            state: '',
            city: '',
            zipCode: 100000
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            console.log(values)
            dispatch(register(values))
          }}
          >
          {
            ({errors, touched, setFieldValue}) => (
               <Form className='basicKyc'>
                {
                  basicKyc.map(field => (
                    (field.type !== 'select')
                    ?
                    <div key={field.id} className="form_input">
                      <label htmlFor={field.label}>{field.label}</label>
                      <Field
                      key={field.id}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      />
                      {
                        errors[field.name] && touched[field.name]
                        ? <small>{errors[field.name]}</small>
                        : null
                      }
                    </div>
                    :
                    <div key={field.id}  className="form_input">
                      <label htmlFor={field.name}>{field.label}</label>
                      <Field as='select' name={field.name}> 
                        <option value="">{field.placeholder}</option>
                      </Field>
                      {
                        errors[field.name] && touched[field.name]
                        ? <small>{errors[field.name]}</small>
                        : null
                      }
                    </div>
                  ))
                }
                <h3>Residential Details</h3>
                {
                  residentialInfo.map(field => (
                    (field.type !== 'select')
                    ?
                    <div key={field.id} className="form_input">
                      <label htmlFor={field.label}>{field.label}</label>
                      <Field
                      key={field.id}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      />
                      {
                        errors[field.name] && touched[field.name]
                        ? <small>{errors[field.name]}</small>
                        : null
                      }
                    </div>
                    :
                    <div key={field.id}  className="form_input">
                      <label htmlFor={field.name}>{field.label}</label>
                      <Field as='select' name={field.name}> 
                        <option value="">{field.placeholder}</option>
                      </Field>
                      {
                        errors[field.name] && touched[field.name]
                        ? <small>{errors[field.name]}</small>
                        : null
                      }
                    </div>
                  ))
                }
                <input
                type='submit'
                value="Register"/>
               </Form>
               
            )
          }
          </Formik>
          <p id='user_signin'>Have an Account? <Link to="/login" id="rSignIn">Sign In</Link></p>
          <p>Register as&nbsp;<Link to="/admin/register" id='rSignIn'>Admin</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register;
