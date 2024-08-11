import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateRoom } from './pages/create-room'
import { Room } from './pages/room'

// Declarando as rotas
const router = createBrowserRouter([
  // Cada objeto deve conter o caminho da URL e qual página irá renderizar
  {
    path: '/',
    element: <CreateRoom />
  },
  {
    path: '/room/:roomId',
    element: <Room />
  }
])

export function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster invert richColors/>
    </>
  )
}

