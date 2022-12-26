import { Link } from 'react-router-dom'
import './login.css'

export const LoginPage = () => {
  return (
    <div className="login__container">
      <div className='login--right'>
        <form>
          <h1>Welcome!</h1>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email' />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <a href="#">Forgot password?</a>

          <input type="submit" value="Login" />
          <Link to="/auth/register">Create account</Link>
        </form>

      </div>
    </div>
  )
}