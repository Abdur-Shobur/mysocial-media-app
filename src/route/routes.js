import { createBrowserRouter } from 'react-router-dom'
import Laout from '../layout/Laout'
import About from '../page/about/About'
import Home from '../page/home/Home'
import Login from '../page/login/Login'
import Signup from '../page/login/Signup'
import Media from '../page/media/Media'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Laout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'media',
        element: <Media />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <Signup />,
      },
    ],
  },
])
export default route
