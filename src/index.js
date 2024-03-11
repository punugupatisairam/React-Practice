import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Counter from './Counter';
import Todolist from './Todolist';
import Products from './Products';
import NewProducts from './NewProducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path:'count',
      element:<Counter></Counter>
    },
    {
      path:'todos',
      element:<Todolist></Todolist>
    },
    {
      path:'prods',
      element:<Products></Products>
    },
    {
      path:'newprod',
      element:<NewProducts></NewProducts>
      
    }
  ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <RouterProvider router={router} />
    
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
