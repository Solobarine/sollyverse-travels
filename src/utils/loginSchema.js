import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
    password: Yup.string()
    .matches('^(?=.*[0-9]).+$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required')
})

export default loginSchema