import './components.css'

export const Navbar = () => {
  return (
    <div className="navbar">

      <div>
        <i className="fas fa-calendar-alt" />
        <span>Jhon Bocanegra</span>
      </div>

      <div>
        <button className='btn--exit'>
        <i className="fas fa-sign-out-alt" />
        Sign out</button>
      </div>

    </div>
  )
}