import { addHours, differenceInSeconds } from 'date-fns'
import DatePicker from 'react-datepicker'
import Modal from 'react-modal'
import 'react-datepicker/dist/react-datepicker.css'

import './components.css'
import { useModal, useForm } from '../hooks'

Modal.setAppElement('#root')

const initialForm = {
  title: 'jhon',
  notes: 'bocanegra',
  start: new Date(),
  end: addHours(new Date(), 2)
}

export const CalendarModal = () => {
  const {title, notes, start, end, onInputChange, onDateChanged} = useForm(initialForm)

  const {modalIsOpen, onCloseModal, onSubmit, openModal} = useModal(start, end)


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
      <form className='modal__form-content' onSubmit={onSubmit}>

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
          autoComplete="off"
          id="title"
          name="title"
          onChange={onInputChange}
          placeholder="Event title"
          type="text"
          value={title}
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