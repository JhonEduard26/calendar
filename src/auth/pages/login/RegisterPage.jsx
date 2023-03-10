import './login.css'

export const RegisterPage = () => {
  return (
    <div className='login__container'>
      <form>
        <h1>Register</h1>
        <label htmlFor="name">Nombre</label>
        <input type="text" name='name' id='name' />

        <label htmlFor="email">Email</label>
        <input type="email" name='email' id='email' />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />

        <label htmlFor="password2">Confirm your password</label>
        <input type="password" name="password2" id="password2" />

        <input type="submit" value="Create account" />
      </form>
    </div>
  )
}