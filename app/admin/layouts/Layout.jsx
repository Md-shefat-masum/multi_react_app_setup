import React from 'react'
import Header from './Header'
import Sidebar from './sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div className="page-wrapper" id="app" data-v-app="">
            <Header></Header>
            <div className="page-body-wrapper">
                <Sidebar></Sidebar>
                <div className="page-body">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default Layout