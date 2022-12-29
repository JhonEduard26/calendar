import { useState } from 'react'

export const useForm = (initialForm) => {

  const [formValues, setFormValues] = useState(initialForm)

  const onInputChange = ({ target }) => {

    const { value, name } = target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  return {
    ...formValues,
    onInputChange,
    onDateChanged,
  }
}