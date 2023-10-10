import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Name too Short')
    .max(20, 'Name too Long')
    .required('Name is Required'),
    lastName: Yup.string()
    .min(2, 'Name too Short')
    .max(20, 'Name too Long')
    .required('Name is Required'),
    email: Yup.string()
    .email('Enter a valid email')
    .required('Email is Required'),
    password: Yup.string()
    .matches('^(?=.*[0-9]).+$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password is Required'),
    countryOfOrigin: Yup.string()
    .required('Country of Origin is Required'),
    addressOne: Yup.string()
    .min(5, 'Address too Short')
    .max(25, 'Address too Long')
    .required('Main address is Required'),
    countryOfResidence: Yup.string()
    .required('Country is Required'),
    state: Yup.string()
    .required('State is Required'),
    city: Yup.string()
    .required('City is Required')
})

export const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Enter a valid email')
    .required('Email is Required'),
    password: Yup.string()
    .matches('^(?=.*[0-9]).+$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required')
})

export const registerInputs = [
    {
        id: 0,
        name: 'firstName',
        type: 'text',
        label: 'First Name',
        placeholder: 'Enter First Name'
    },
    {
        id: 1,
        name: 'lastName',
        type: 'text',
        label: 'Last Name',
        placeholder: 'Enter Last Name'
    },
    {
        id: 2,
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter Your Email'
    },
    {
        id: 3,
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Your Password'
    },
    {
        id: 4,
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Re-Type Your Password'
    },
    {
        id: 5,
        name: 'countryOfOrigin',
        type: 'select',
        label: 'Country Of Orign',
        placeholder: 'Country of Origin'
    },
    {
        id: 6,
        name: 'addressOne',
        type: 'text',
        label: 'Main Address',
        placeholder: 'Enter Your Main Address'
    },
    {
        id: 7,
        name: 'countryOfResidence',
        type: 'select',
        label: 'Country of Residence',
        placeholder: 'Country of Residence'
    },
    {
        id: 8,
        name: 'state',
        type: 'input',
        label: 'State',
        placeholder: 'Enter Your State'
    },
    {
        id: 9,
        name: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'Enter Your City'
    }
]

export const loginInputs = [
    {
        id: 0,
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'Enter Your Email'
    },
    {
        id: 1,
        name: 'password',
        type: 'password',
        label: 'Password',
        placeholder: 'Enter Your Password'
    }
]