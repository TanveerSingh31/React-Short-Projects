import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import {About, Home, Contact, Error} from './components/index.js';
import ProductDetail from './components/ProductDetail.js';

// createBrowserRouter -> class, using which we will create object, and pass out routing logic in it
// RouterProvider -> Component, that we will wrap out <App /> inside it, and pass our router to it in props

// Giving our routing configuration to the createBrowserRouter class
const appRouter = new createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // elements in children array, will replace the Outlet component in <App /> component
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: "/product/:id",
                element: <ProductDetail />
            }
        ],
        errorElement: <Error /> // error element, this components is loaded incase of any error
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // wrapping out <App /> inside the RouterProvider component
    // providing out appRouter object in props
    <RouterProvider router={appRouter}>
         <App />
    </RouterProvider>
);
