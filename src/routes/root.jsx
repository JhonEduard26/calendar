import { createBrowserRouter } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth/pages'
import { CalendarPage, ErrorPage } from '../calendar/pages'
import { ProtectedRoute } from './'

export const router = createBrowserRouter([
  {
    path: '/',
    element: 
    <ProtectedRoute>
      <CalendarPage />
    </ProtectedRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: 'auth/register',
    element: <RegisterPage />
  }
])