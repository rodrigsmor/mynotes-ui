import { Notes } from '../pages/notes';
import { Login } from '../pages/login';
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