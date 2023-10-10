import { useState } from "react"

const SelectInput = (props) => {
  const setISO = (e) => {
    props.options.map((option) => {
      if (option.name === e.target.value) {
        props.stateISO(option.iso2)
        
      }
      return option
  })
  }

  const [isEmpty, setIsEmpty] = useState(false)

  const [focused, setFocused] = useState(false)
  const handleFocused = () => {
    setFocused(true)
  }

  return (
    <div className='select_input'>
        <label htmlFor={props.name}>{props.label}</label>
        <select
        onChange={(e) => {
          props.name !== 'countryOfOrigin' && setISO(e)
          if (e.target.value === '') {
            console.log(e.target);
            setIsEmpty(true)
          }
          props.onChange(e)
        }}
        onClick={(e) => {
          e.target.value === ''
          ? setIsEmpty(true)
          : setIsEmpty(false)
        }}
        name={props.name}
        onBlur={handleFocused}
        className={`${isEmpty ? 'empty_select_field' : ''}`}
        focused={focused.toString()}
        id={props.name}
        required={props.required}>
          <option value=''>{props.placeholder}</option>
          {
            props.options.map((option) => (
              <option
              key={option.id}
              value={option.name}
              >{option.name}</option>
            ))
          }
        </select>
        <small className={`error_message ${isEmpty ? 'empty_select_message' : ''}`}>{props.errorMessage}</small>
    </div>
  )
}

export default SelectInput