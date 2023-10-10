import * as Yup from 'yup'

export const updateProperties = [
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
        id: 5,
        name: 'addressOne',
        type: 'text',
        label: 'Main Address',
        placeholder: 'Enter Your Main Address'
    },
    {
        id: 6,
        name: 'addressTwo',
        type: 'text',
        label: 'Other Address',
        placeholder: 'Enter Your Secondary Address'
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
        type: 'select',
        label: 'State',
        placeholder: 'Select Your State'
    },
    {
        id: 9,
        name: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'Select Your City'
    },
    {
        id: 10,
        name: 'zipCode',
        type: 'number',
        label: 'ZIP Code',
        placeholder: 'Enter Your ZIP Code'
    }
]

export const passwordInputs = [
    {
        id: 0,
        name: 'currentPassword',
        type: 'password',
        label: 'Current Password',
        placeholder: 'Enter Current Password'
    },
    {
        id: 1,
        name: 'newPassword',
        type: 'password',
        label: 'New Password',
        placeholder: 'Enter New Password'
    },
    {
        id: 2,
        name: 'confirmPassword',
        type: 'password',
        label: 'Confirm Password',
        placeholder: 'Re-Type Your Password'
    }
]

export const updateUserBioSchema = Yup.object().shape({
    firstName: Yup.string()
    .min(2, 'Name too Short')
    .max(20, 'Name too Long')
    .required('First Name is Required'),
    lastName: Yup.string()
    .min(2, 'Name too Short')
    .max(20, 'Name too Long')
    .required('Last Name is Required'),
    email: Yup.string()
    .email('Enter a Valid Email')
    .required('Email is Required'),
    addressOne: Yup.string()
    .min(5, 'Address too Short')
    .max(25, 'Address too Long')
    .required('Main address is Required'),
    addressTwo: Yup.string()
    .min(5, 'Address too Short')
    .max(25, 'Address too Long')
    .notRequired(),
    countryOfResidence: Yup.string()
    .required('Country is Required'),
    state: Yup.string()
    .required('State is Required'),
    city: Yup.string()
    .required('City is Required'),
    zipCode: Yup.number()
    .min(100000, 'Zip Code too Short')
    .max(999999, 'Zip Code too Long')
    .required('Zip Code is Required')
})

export const updatePasswordSchema = Yup.object().shape({
    currentPassword: Yup.string()
    .matches('^(?=.*[0-9])$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required'),
    newPassword: Yup.string()
    .matches('^(?=.*[0-9])$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .matches(Yup.ref('newPassword'), 'Passwords do not Match')
    .required('Confirm Password is Required')
})