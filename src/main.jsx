import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Users from './components/Users/Users';
import ShowDetails from './components/ShowDetails/ShowDetails';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element:<Home></Home>,
    children:[
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<ShowDetails></ShowDetails>
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
