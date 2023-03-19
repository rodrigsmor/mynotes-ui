import { Notes } from '../pages/notes';
import { createBrowserRouter } from "react-router-dom";
import { Signup } from '../pages/signup';
import { Login } from '../pages/login';
import { NotFound } from '../pages/notFound';
import { LandingPage } from '../pages/landingPage';

export const routes = createBrowserRouter([
  {
    path: '/auth/login',
    element: <Login />,
  }, {
    path: '/auth/signup',
    element: <Signup />,
  }, {
    path: '/app/notes',
    element: <Notes />,
  }, {
    path: '/',
    element: <LandingPage />
  }, {
    path: '*',
    element: <NotFound />,
  }
])