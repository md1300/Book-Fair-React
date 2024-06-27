import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Home/Home';
import ListedBooks from './ListedBooks/ListedBooks';
import ReadPage from './ReadPage/ReadPage';
import BooksDetails from './BooksDetails/BooksDetails';
import Wishlist from './Wishlist/Wishlist';
import ReadBooks from './ReadBooks/ReadBooks';
import About from './About/About';
import Contact from './Contact/Contact';
import ErrorPage from './ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
       path:"/ListedBooks",
       
       element:<ListedBooks></ListedBooks>,
       children:[
        {
          path:'',
          loader:()=>fetch('/BooksData.json'),
          element:<ReadBooks></ReadBooks>,
        },
        {
          path:'wishlist',
          loader:()=>fetch('/BooksData.json'),
          element:<Wishlist></Wishlist>, 
        }
       ],
      },
      {
        path:"/readPage",
        loader:()=>fetch('/BooksData.json'),
        element:<ReadPage></ReadPage>
      },
      {
        path:"/books/:id",
        loader:()=>fetch('/BooksData.json'),
        element:<BooksDetails></BooksDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
