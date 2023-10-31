import React from 'react'

function Header() {
    return (
        <>
            <div className="page-main-header">
                <div className="main-header-left" semilight-bg-color="bg-default-light-colo">
                    <div className="logo-wrapper">
                        <a href="https://ctgcomputer.com/seo-management" id="logo" className="d-flex align-items-end gap-1">
                            <img src="https://md-shefat-masum.github.io/index/images/logo.png" className="image-dark" alt="" />
                            <img src="https://md-shefat-masum.github.io/index/images/logo.png" className="image-light" alt="" />
                            <span className="text-white h4">Dashboard</span>
                        </a>
                    </div>
                </div>
                <div className="main-header-right row" header-bg-color="bg-default-light-colo">
                    <div className="mobile-sidebar col-1 ps-0">
                        <div className="text-start switch-sm">
                            <label className="switch">
                                <input type="checkbox" id="sidebar-toggle" />
                                <span className="switch-state"></span>
                            </label>
                        </div>
                    </div>
                    <div className="nav-right col">
                        <ul className="nav-menus">
                            <li className="onhover-dropdown">
                                <div className="d-flex align-items-center">
                                    <img className="align-self-center pull-right flex-shrink-0 me-2"
                                        src="/dashboard/user.png" alt="header-user" />
                                    <div>
                                        <h6 className="m-0 txt-dark f-16"> My Account <i className="fa fa-angle-down pull-right ms-2"></i></h6>
                                    </div>
                                </div>
                                <ul className="profile-dropdown onhover-show-div p-20">
                                    <li><a href="#"><i className="icon-user"></i> Edit Profile </a></li>
                                    <li><a href="#"><i className="icon-power-off"></i> Logout </a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header