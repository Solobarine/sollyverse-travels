import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Formik, Form, Field } from "formik"
import { cityInputs, citySchema } from "../../utils/cityInputs"
import cityAsyncThunk from "../../redux/features/apiCalls/city"
import countryAsyncThunk from "../../redux/features/apiCalls/country"
import { clearCityError, clearCityMessage } from "../../redux/features/adminReducer/city"

const AddCity = () => {
    const dispatch = useDispatch()

    const { city } = useSelector(state => state.adminCity)

    const { countries } = useSelector(state => state.adminCountry)

    useEffect(() => {
        dispatch(countryAsyncThunk.adminShowAll())
    }, [dispatch])

    const handleSubmit = async (values) => {
        console.log(values);
        const formData = new FormData()
        formData.append('name', values.name)
        formData.append('country', values.country)
        formData.append('cost', values.cost)
        formData.append('description', values.description)
        formData.append('longitude', values.longitude)
        formData.append('latitude', values.latitude)
        values.images.map(image => {
            return formData.append(`files`, image)
        })
        dispatch(cityAsyncThunk.create(formData))
    }

    return (
        <section>
            {
                city.message ?
                <div className="responseMessage">
                    <p>{city.message}</p>
                    <p
                    className="close"
                    onClick={() => dispatch(clearCityMessage())}
                    >&#10006;</p>
                </div> 
                : null
            }
            {
                city.error
                ?
                <div className="responseError">
                    <p>{city.error}</p>
                    <p
                    onClick={() => dispatch(clearCityError())}
                    className="close"
                    >&#10006;</p>
                </div>
                : null
            }
            <Formik
            initialValues={{
                name: '',
                images: [],
                country: '',
                description: '',
                longitude: '',
                latitude: '',
            }}
            validationSchema={citySchema}
            onSubmit={values => handleSubmit(values)}
            >
                {
                    ({ errors, touched, setFieldValue }) => (
                        <Form
                        encType="multipart/form-data"
                        >
                            {
                                cityInputs.map(field => (
                                    (field.type === 'textarea')
                                    ?
                                    <div
                                    key={field.id}
                                    className="form_input textarea">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <Field
                                        cols='30'
                                        rows='10'
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
                                    : (field.type === 'file')
                                    ?
                                    <div
                                    key={field.id}
                                    className="form_input">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <input
                                        type="file"
                                        name={field.name}
                                        multiple
                                        placeholder={field.placeholder}
                                        onChange={(e) => {
                                            const selectedFiles = Array.from(e.target.files)
                                            setFieldValue('images', selectedFiles)
                                        }}
                                        />
                                        {
                                            errors[field.name] && touched[field.name]
                                            ? <small>{errors[field.name]}</small>
                                            : null
                                          }
                                    </div>
                                    : (field.type === 'select')
                                    ?
                                    <div
                                    key={field.id}
                                    className="form_input">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <select
                                        onChange={(e) => {
                                            countries.value.map(country => (
                                                (country.name === e.target.value)
                                                ? setFieldValue(field.name,country._id)
                                                : ''
                                            ))
                                        }}
                                        name={field.name}>
                                            <option value="">{field.placeholder}</option>
                                            {
                                                countries.value.map((country, index) => (
                                                    <option key={index}>{country.name}</option>
                                                ))
                                            }
                                        </select>
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
                            <input type="submit" value="Add New City"/>
                        </Form>
                    )
                }
            </Formik>
        </section>
  )
}

export default AddCity