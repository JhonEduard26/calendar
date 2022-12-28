import { useState } from 'react'
import { addHours } from 'date-fns'
import Modal from 'react-modal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import './components.css'

Modal.setAppElement('#root')

export const CalendarModal = () => {

  let subtitle
  const [modalIsOpen, setIsOpen] = useState(true)

  const onInputChange = ({ target }) => {

    const { value, name } = target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const [formValues, setFormValues] = useState({
    title: 'Jhon',
    notes: 'Bocanegra',
    start: new Date(),
    end: addHours(new Date(), 2)
  })

  const { title, notes, start, end } = formValues

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValues,
      [changing]: event
    })
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> New Event </h1>
      <hr />
      <form className='modal__form-content'>

        <label htmlFor='startdate'>Date and time start</label>
        <DatePicker
          selected={start}
          onChange={(event) => onDateChanged(event, 'start')}
          dateFormat="Pp"
          showTimeSelect
        />

        <label htmlFor='enddate'>Date and time end</label>
        <DatePicker
          minDate={start}
          selected={end}
          onChange={(event) => onDateChanged(event, 'end')}
          dateFormat="Pp"
          showTimeSelect
        />

        <hr />
        <label htmlFor='title'>Title and notes</label>
        <input
          type="text"
          placeholder="Event title"
          name="title"
          value={title}
          onChange={onInputChange}
          autoComplete="off"
          id='title'
        />
        <small id="emailHelp">Small description</small>

        <textarea
          type="text"
          placeholder="Notes"
          rows="5"
          name="notes"
          value={notes}
          onChange={onInputChange}
        ></textarea>
        <small id="emailHelp">Extra information</small>

        <button
          className='save--button'
          type="submit"
        >
          <i className="far fa-save"></i>
          <span>  Save</span>
        </button>

      </form>
    </Modal>
  )
}