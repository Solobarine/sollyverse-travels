import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Formik, Form, Field } from "formik"
import { useDispatch } from "react-redux"
import { signUp } from "../redux/features/apiCalls/admin"
import { getCountryList } from "../utils/countries"
import { registerInputs, registerSchema } from "../utils/adminSchema"
import './css/SignUp.css'

const SignUp = () => {

  let [countries, setCountries] = useState([])

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

  const dispatch = useDispatch()

  return (
    <section className="adminSignUp page shrinkMenu">
      <div id="adminSignUp">
        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          countryOfOrigin: '',
          addressOne: '',
          countryOfResidence: '',
          state: '',
          city: '',
        }}
        validationSchema={registerSchema}
        // onSubmit={(values) => console.log(values)}
        onSubmit={(values) => dispatch(signUp(values))}
        >
          {({errors, touched}) => (
            <Form>
              <h2>Admin Registration</h2>
            {
              registerInputs.map(field => (
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
                  <Field as='select'
                  name={field.name}
                  >
                    <option value="">{field.placeholder}</option>
                    {
                      (field.name === 'countryOfOrigin' || field.name === 'countryOfResidence') 
                        ? countries.map((country, index) => (
                          <option key={index} value={country.name}>{country.name}</option>
                        ))
                        : null
                    }
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
            type="submit"
            onClick={(values) => console.log(values)}
            value='Register'
            />
           </Form>
          )}
        </Formik>
        <p id="link_to_login">Already an Admin ,<Link to="/admin/login">Sign in</Link></p> 
      </div>
    </section>
  )
}

export default SignUp
