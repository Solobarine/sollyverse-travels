import * as Yup from 'yup'

export const countryInputs = [
    {
        id: 0,
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Enter Country Name'
    },
    {
        id: 1,
        name: 'capital',
        type: 'text',
        label: 'Capital City',
        placeholder: 'Enter Capital City'
    },
    {
        id: 2,
        name: 'continent',
        type: 'select',
        label: 'Continent',
        placeholder: 'Enter Continent',
        options: [
            'North America',
            'South America',
            'Africa',
            'Europe',
            'Asia',
            'Oceania'
        ]
    },
    {
        id: 3,
        name: 'officialLanguage',
        type: 'text',
        label: 'Official Language',
        placeholder: 'Enter Official Language'
    },
    {
        id: 4,
        name: 'imageUrl',
        type: 'text',
        label: 'Image Url',
        placeholder: 'Enter Image Url'
    },
    {
        id: 5,
        name: 'description',
        type: 'textarea',
        label: 'Name',
        placeholder: 'Description....'
    },
    {
        id: 6,
        name: 'longitude',
        type: 'text',
        label: 'Longitude',
        placeholder: 'Enter Longitude'
    },
    {
        id: 7,
        name: 'latitude',
        type: 'text',
        label: 'Latitude',
        placeholder: 'Enter Latitude'
    }
]

export const countrySchema = Yup.object().shape({
    name: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    capital: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    officialLanguage: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    continent: Yup.string()
    .min(3, 'Name too Short')
    .max(25, 'Name too Long')
    .required('Name is Required'),
    description: Yup.string()
    .min(50, 'Description too little')
    .max(1000, 'Description too much')
    .required('Description is Required'),
    longitude: Yup.number('Longitude must be a Number')
    .required('Longitude is Required'),
    latitude: Yup.number('Latitude must be a Number')
    .required('Latitude is Required')
})