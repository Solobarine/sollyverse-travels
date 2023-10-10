import * as Yup from 'yup'

export const cityInputs = [
    {
        id: 0,
        name: 'name',
        type: 'text',
        label: 'City Name',
        placeholder: 'Enter City Name'
    },
    {
        id: 1,
        name: 'country',
        type: 'select',
        label: 'Country Name',
        placeholder: 'Select a Country'
    },
    {
        id: 2,
        name: 'cost',
        type: 'number',
        label: 'Cost',
        placeholder: 'Enter Cost'
    },
    {
        id: 3,
        name: 'files',
        type: 'file',
        label: 'City Images',
        placeholder: 'Select City Images'
    },
    {
        id: 4,
        name: 'description',
        type: 'textarea',
        label: 'City Description',
        placeholder: 'Description....'
    },
    {
        id: 5,
        name: 'longitude',
        type: 'text',
        label: 'Longitude',
        placeholder: 'Enter Longitude'
    },
    {
        id: 6,
        name: 'latitude',
        type: 'text',
        label: 'Latitude',
        placeholder: 'Enter Latitude'
    }
]

export const updateCityInputs = [
    {
        id: 0,
        name: 'name',
        type: 'text',
        label: 'City Name',
        placeholder: 'Enter City Name'
    },
    {
        id: 1,
        name: 'country',
        type: 'text',
        label: 'Country Name',
        placeholder: 'Enter Country'
    },
    {
        id: 2,
        name: 'cost',
        type: 'number',
        label: 'Cost',
        placeholder: 'Enter Cost'
    },
    {
        id: 4,
        name: 'description',
        type: 'textarea',
        label: 'City Description',
        placeholder: 'Description....'
    },
    {
        id: 5,
        name: 'longitude',
        type: 'text',
        label: 'Longitude',
        placeholder: 'Enter Longitude'
    },
    {
        id: 6,
        name: 'latitude',
        type: 'text',
        label: 'Latitude',
        placeholder: 'Enter Latitude'
    }
]

export const citySchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    country: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    cost: Yup.number()
    .min(300, 'Amount too Low')
    .max(10000, 'Amount too High')
    .required('Cost is Required'),
    images: Yup
    .mixed()
    // .test('fileType', 'Invalid file format', (value) => {
    //     if (!value) return true
    //     return ['image/png', 'image/jpeg', 'image/jpg'].includes(value.type)
    // })
    .required('Images are Required'),
    description: Yup.string()
    .min(50, 'Description too little')
    .max(2000, 'Description too much')
    .required('Description is Required'),
    longitude: Yup.number('Longitude must be a Number')
    .required('Longitude is Required'),
    latitude: Yup.number('Latitude must be a Number')
    .required('Latitude is Required')
})

export const updateCitySchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    country: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    cost: Yup.number()
    .min(300, 'Amount too Low')
    .max(5000, 'Amount too High')
    .required('Cost is Required'),
    description: Yup.string()
    .min(50, 'Description too little')
    .max(1000, 'Description too much')
    .required('Description is Required'),
    longitude: Yup.number('Longitude must be a Number')
    .required('Longitude is Required'),
    latitude: Yup.number('Latitude must be a Number')
    .required('Latitude is Required')
})