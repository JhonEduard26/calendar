import { useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import Swal from 'sweetalert2'

export const useModal = (start, end) => {
  const [modalIsOpen, setIsOpen] = useState(true)

  const openModal = () => {
    setIsOpen(true)
  }

  const onCloseModal = () => {
    setIsOpen(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const difference = differenceInSeconds(end, start)
    
    if (isNaN(difference) || difference <= 0) {
      Swal.fire('Incorrect dates', 'Please check dates', 'error')
      return
    }
    if(title.length === 0) return 
    // TODO: remover errores en pantalla
    // TODO: cerrar el modal
  }


  return {
    modalIsOpen,
    openModal,
    onCloseModal,
    onSubmit,
  }
}