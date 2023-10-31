import React from 'react';
import { createRoot } from 'react-dom/client';
import {
    RouterProvider,
    createHashRouter,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Layout from './layouts/Layout';
import Dashboard from './pages/Dashboard';
// import store from './store/index.js';

import user_routers from "./pages/management/user/config/routers";
import blog_routers from "./pages/management/blog/config/routers";


function Component() {
    const router = createHashRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '',
                    element: <Dashboard></Dashboard>
                },
                user_routers,
                blog_routers,
            ]
        }
    ]);
    return <RouterProvider router={router}></RouterProvider>
}

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    // <Provider store={{}}>
    //     <Component />
    // </Provider>
    <Component />

);