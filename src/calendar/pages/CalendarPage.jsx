import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'

import { CalendarEvent, Navbar } from '../components'
import { localizer } from '../../helpers'

const events = [
  {
    title: 'Cumpleaños',
    note: 'Comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 1),
    user: 'Jhon'
  }
]

export const CalendarPage = () => {
  return (
    <>
    <Navbar />

    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      components={{
        event: CalendarEvent
      }}
    />
    </>
  )
}