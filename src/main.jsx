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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
       path:"/ListedBooks",
       element:<ListedBooks></ListedBooks>
      },
      {
        path:"/readPage",
        element:<ReadPage></ReadPage>
      },
      {
        path:"/books/:id",
        loader:()=>fetch('BooksData.json'),
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
