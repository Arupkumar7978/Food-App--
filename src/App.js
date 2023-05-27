import './App.css';
import Navbar from './Components/Navbar/index';
import Error from './Components/Error/index';
import Footer from './Components/Footer/index';
import About from './Containers/About/index';
import Body from './Containers/Body/index';
import { createBrowserRouter, Outlet } from 'react-router-dom';

const App = () => {
 
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
    ],
  },
]);
