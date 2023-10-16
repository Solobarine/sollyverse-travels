import { Formik, Form, Field } from "formik"
import { updateCityInputs, updateCitySchema } from "../../utils/cityInputs"

const UpdateCity = () => {

    return (
        <section id='update_city'>
            <Formik
            initialValues={{
                name: '',
                country: '',
                description: '',
                longitude: '',
                latitude: '',
            }}
            validationSchema={updateCitySchema}
            onSubmit={values => console.log(values)}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                                <h2>Update City</h2>
                                {
                                    updateCityInputs.map(field => (
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
                                <input type="submit" value="Update City"/>
                        </Form>
                    )
                }
            </Formik>
        </section>
    )
}

export default UpdateCity