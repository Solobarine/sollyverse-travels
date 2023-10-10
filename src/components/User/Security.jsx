import { Formik, Form, Field } from "formik"
import { passwordInputs, updatePasswordSchema  } from "../../utils/updateProfile"
import './css/Security.css'

const Security = () => {

    return (
    <div className="security">
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
                            passwordInputs.map(input => (
                                <div className="form_input">
                                    <label htmlFor={input.name}>{input.label}</label>
                                    <Field
                                    name={input.name}
                                    placeholder={input.placeholder}
                                    />
                                    {
                                        errors[input.name] && touched[input.name]
                                        ? <small>{errors[input.name]}</small>
                                        : null
                                    }
                                </div>
                            ))
                        }
                        <button type="submit">Update Password</button>
                    </Form>
                )
            }
        </Formik>
    </div>
    )
}

export default Security