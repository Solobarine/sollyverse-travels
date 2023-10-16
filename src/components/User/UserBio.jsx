import { useState, useEffect } from "react"
import { getCountryList } from "../../utils/countries"
import { updateUserBioSchema, updateProperties } from "../../utils/updateProfile"
import { Formik, Form, Field } from "formik"
import './css/UserBio.css'

const UserBio = () => {

    let [countries, setCountries] = useState([])
    // let [residenceCountryISO, setResidenceCountryISO] = useState('')
    // let [states, setStates] = useState([])

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

  return (
    <div className="userbio">
        <h1>Update Your Profile</h1>
        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            addressOne: '',
            addressTwo: '',
            countryOfResidence: '',
            state: '',
            city: '',
            zipCode: ''
        }}
        validationSchema={updateUserBioSchema}
        onSubmit={(values) => console.log(values)}
        >
            {
              ({errors, touched}) => (
                <Form>
                    <h1>Change Password</h1>
                    {
                    updateProperties.map(field => (
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
                    <button
                    type="submit"
                    onClick={(values) => console.log(values)}
                    >Register</button>
                </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default UserBio