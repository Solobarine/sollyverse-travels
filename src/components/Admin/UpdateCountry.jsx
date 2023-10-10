import { Formik, Form, Field } from 'formik'
import { countryInputs, countrySchema } from '../../utils/countryInputs'

const UpdateCountry = () => {

    return (
        <section>
            <Formik
            initialValues={{
                name: '',
                description: '',
                capital: '',
                continent: '',
                officialLanguage: '',
                longitude: '',
                latitude: ''
            }}
            validationSchema={countrySchema}
            onSubmit={values => console.log(values)}
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
                            <input type="submit" value="Add New Country"/>
                        </Form>
                    )
                }

            </Formik>
        </section>
    )
}

export default UpdateCountry