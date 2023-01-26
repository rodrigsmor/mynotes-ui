import { Notes } from '../pages/notes';
import { createBrowserRouter } from "react-router-dom";
import { Signup } from '../pages/signup';
import { Login } from '../pages/login';

export const routes = createBrowserRouter([
  {
    path: '/auth/login',
    element: <Login />,
  }, {
    path: '/auth/signup',
    element: <Signup />,
  }, {
    path: '/notes',
    element: <Notes />,
  }
])