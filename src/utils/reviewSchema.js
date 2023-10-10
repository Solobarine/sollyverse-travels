import * as Yup from 'yup'

export const reviewInputs = [
    {
        id: 0,
        name: 'title',
        type: 'input',
        label: 'Title',
        placeholder: 'Title...'
    },
    {
        id: 1,
        name: 'review',
        type: 'textarea',
        label: 'Review',
        placeholder: 'Review...'
    }
]

export const reviewSchema = Yup.object().shape({
    title: Yup.string()
    .min(2, 'Title too Short')
    .max(25, 'Title too Long')
    .required('Title is Required'),
    review: Yup.string()
    .min(2, 'Review too Short')
    .max(800, 'Review too Long')
    .required('Review is Required')
})