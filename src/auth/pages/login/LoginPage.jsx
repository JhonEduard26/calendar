import './LoginPage.css'

export const LoginPage = () => {
  return (
    <div className="login__container">
      <div className='login--left'></div>
      <div className='login--right'>
        <form>
          <h1>Welcome!</h1>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' id='email'/>

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />

          <a href="#">Forgot password?</a>

          <input type="button" value="Login" />
        </form>

        <a href="#">Create account</a>
      </div>
    </div>
  )
}