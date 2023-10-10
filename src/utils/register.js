import * as Yup from 'yup'

Yup.addMethod(Yup.date, 'isOldEnough', function () {
    return this.test({
      name: 'isOldEnough',
      message: 'You must be at least 17 years old',
      test: function (value) {
        if (!value) return true
  
        const currentDate = new Date()
        const dob = new Date(value)
        const age = currentDate.getFullYear() - dob.getFullYear()
        return age >= 17
      }
    })
  })

export const basicKyc = [
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
        name: 'dateOfBirth',
        type: 'date',
        label: 'Date of Birth',
        placeholder: 'Enter Your Date of Birth'
    },
    {
        id: 6,
        name: 'gender',
        type: 'text',
        label: 'Gender',
        placeholder: 'Enter Your Gender'
    },
    {
        id: 7,
        name: 'countryOfOrigin',
        type: 'select',
        label: 'Country Of Orign',
        placeholder: 'Country of Origin'
    }
]

export const residentialInfo = [
    {
        id: 0,
        name: 'addressOne',
        type: 'text',
        label: 'Main Address',
        placeholder: 'Enter Your Main Address'
    },
    {
        id: 1,
        name: 'addressTwo',
        type: 'text',
        label: 'Other Address',
        placeholder: 'Enter Your Secondary Address'
    },
    {
        id: 2,
        name: 'countryOfResidence',
        type: 'select',
        label: 'Country of Residence',
        placeholder: 'Country of Residence'
    },
    {
        id: 3,
        name: 'state',
        type: 'text',
        label: 'State',
        placeholder: 'Enter Your State'
    },
    {
        id: 4,
        name: 'city',
        type: 'text',
        label: 'City',
        placeholder: 'Enter Your City'
    },
    {
        id: 5,
        name: 'zipCode',
        type: 'number',
        label: 'ZIP Code',
        placeholder: 'Enter Your ZIP Code'
    }
   
]

export const registerSchema = Yup.object().shape({
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
    password: Yup.string()
    .matches('^(?=.*[0-9]).+$', 'Password Must contain at least 1 Number')
    .min(8, 'Password too Short')
    .max(16, 'Password too Long')
    .required('Password is Required'),
    confirmPassword: Yup.string()
    .matches(Yup.ref('password'), 'Passwords do not Match')
    .required('Password is Required'),
    dateOfBirth: Yup.date()
    .isOldEnough()
    .required('Date of Birth is Required'),
    gender: Yup.string()
    .required('Gender is Required'),
    countryOfOrigin: Yup.string()
    .required('Country of Origin is Required'),
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
    .min(2, 'State Name too Short')
    .max(20, 'State Name too Long')
    .required('State is Required'),
    city: Yup.string()
    .min(2, 'State Name too Short')
    .max(20, 'State Name too Long')
    .required('City is Required'),
    zipCode: Yup.number()
    .min(100000, 'Zip Code too Short')
    .max(999999, 'Zip Code too Long')
    .required('Zip Code is Required')
})