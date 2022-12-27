import { useState } from 'react'
import Modal from 'react-modal'
import './components.css'

Modal.setAppElement('#root')

export const CalendarModal = () => {

  let subtitle
  const [modalIsOpen, setIsOpen] = useState(true)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00'
  }

  function onCloseModal() {
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
      <h2>Hello</h2>
      <button onClick={onCloseModal}>close</button>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae unde dolores voluptates voluptatem ipsum iure libero, porro eligendi itaque cum sapiente. Voluptate, ex incidunt in quas tempora tenetur numquam tempore?</p>
    </Modal>
  )
}