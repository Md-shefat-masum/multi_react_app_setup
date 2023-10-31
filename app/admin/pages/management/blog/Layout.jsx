import React from 'react'
import { Outlet } from 'react-router-dom'
import setup from './config/setup';
const { page_title } = setup;

function Layout() {
    return (
        <>
            <div class="container-fluid">
                <div class="page-header">
                    <h5> {page_title} </h5>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout