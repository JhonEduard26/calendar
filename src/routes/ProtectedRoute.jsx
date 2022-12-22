import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
  const status = 'authenticated'
  if (status !== 'authenticated') {
    return <Navigate to={'/auth'} replace/>
  }

  console.log(status)

  return children
}