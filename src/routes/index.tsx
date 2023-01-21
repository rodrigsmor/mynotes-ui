import { Login } from '../pages/login';
import { Notes } from '../pages/notes';
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  }, {
    path: '/notes',
    element: <Notes />,
  }
])