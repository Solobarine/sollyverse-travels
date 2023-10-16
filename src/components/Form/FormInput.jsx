import { Field } from 'formik'
import './FormInput.css'

const FormInput = (props) => {
  console.log(props.errors);
  return (
    <div className={`form_input ${props.name}_div`}>
        <label htmlFor={props.name}>{props.label}</label>
        <Field
        type={props.type}
        name={props.name}
        errors={props.errors[props.name]}
        touched={props.touched[props.name]}
        placeholder={props.placeholder}
        />
        errors
        {
          props.errors && props.touched
          ? <small className='error_message'>{props.errors}</small>
          : null
        }
    </div>
  )
}

export default FormInput