import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <h1>Error 404, page not found!</h1>
      <p>
        <i>{error.statusText || error.message} </i>  
      </p>    
    </>
  )
}