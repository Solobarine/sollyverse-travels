import { Formik, Form, Field } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { countryInputs, countrySchema } from "../../utils/countryInputs"
import countryAsyncThunk from "../../redux/features/apiCalls/country"
import { clearCountryError, clearCountryMessage } from "../../redux/features/adminReducer/country"

const AddCountry = () => {
    const { country } = useSelector(state => state.adminCountry)
    const dispatch = useDispatch()
    console.log(country);

    return (
        <section>
            {
                country.message ?
                <div className="responseMessage">
                    <p>{country.message}</p>
                    <p
                    className="close"
                    onClick={() => dispatch(clearCountryMessage())}
                    >&#10006;</p>
                </div> 
                : null
            }
            {
                country.error
                ?
                <div className="responseError">
                    <p>{country.error}</p>
                    <p
                    onClick={() => dispatch(clearCountryError())}
                    className="close"
                    >&#10006;</p>
                </div>
                : null
            }
            <h2>Add New Country</h2>
            <Formik
            initialValues={{
                name: '',
                description: '',
                capital: '',
                continent: '',
                officialLanguage: '',
                imageUrl: '',
                longitude: '',
                latitude: ''
            }}
            validationSchema={countrySchema}
            onSubmit={(values) => {
                console.log(values)
                dispatch(countryAsyncThunk.create(values))
            }}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            {
                                countryInputs.map(field => (
                                    (field.type === 'select')
                                    ?
                                    <div
                                    key={field.id}
                                    className="form_input">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <Field
                                            as={field.type}
                                            name={field.name}
                                            >
                                                <option value="">{field.placeholder}</option>
                                                {
                                                    field.options.map((option, index) => (
                                                        <option
                                                        key={index}>{option}</option>
                                                    ))
                                                }
                                        </Field>
                                        {
                                            errors[field.name] && touched[field.name]
                                            ? <small>{errors[field.name]}</small>
                                            : null
                                          }
                                    </div>
                                    : (field.type === 'textarea')
                                    ?
                                    <div
                                    key={field.id}
                                    className="form_input textarea">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <Field
                                        cols="30"
                                        rows="10"
                                        as={field.type}
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
                                    <div
                                    key={field.id}
                                    className="form_input">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <Field
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
                                ))
                            }
                            <input
                            type="submit"
                            value="Add New Country"
                            />
                        </Form>
                    )
                }

            </Formik>
            
        </section>
  )
}

export default AddCountry