import { Formik, Form, Field } from "formik"
import { passwordInputs, updatePasswordSchema } from "../../utils/updateProfile"
import './css/Security.css'

const Security = () => {

  return (
    <div id="adminSecurity">
        <h3>Update Password</h3>
        <Formik
        initialValues={{
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        }}
        validationSchema={updatePasswordSchema}
        onSubmit={(values) => console.log(values)}
        >
            {
                ({errors, touched}) => (
                    <Form>
                        {
                            passwordInputs.map(field => (
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
                        type='submit'
                        value='Update Password'
                        />
                    </Form>
                )
            }
        </Formik>
    </div>
  )
}

export default Security