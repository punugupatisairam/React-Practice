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
import Loginforms from './Loginforms';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // children:{
    //   path:'/',
    //   element:<Loginforms></Loginforms>
    // }
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> 
          <RouterProvider router={router} /> 
    </Provider>
);


reportWebVitals();



