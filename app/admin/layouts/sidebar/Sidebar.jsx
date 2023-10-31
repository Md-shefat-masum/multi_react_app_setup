import React from 'react'

function Sidebar() {
    return (
        <>
            <div className="page-sidebar custom-scrollbar">
                <div className="sidebar-user text-center">
                    <div><img className="img-50 rounded-circle" src="/dashboard/1.jpg" alt="#" /></div>
                    <h6 className="mt-3 f-12">Admin</h6>
                </div>
                <ul className="sidebar-menu">
                    <li>
                        <a href="#/" className="router-link-active router-link-exact-active sidebar-header">
                            <i className="icon-pie-chart"></i>
                            <span>Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/user" className="router-link-active router-link-exact-active sidebar-header">
                            <i className="icon-pie-chart"></i>
                            <span>User</span>
                        </a>
                    </li>
                    <li>
                        <a href="#/blog" className="router-link-active router-link-exact-active sidebar-header">
                            <i className="icon-pie-chart"></i>
                            <span>Blog</span>
                        </a>
                    </li>

                    <li>
                        <a href="/logout" className="sidebar-header" onclick=" event.preventDefault(); return confirm('logout') &amp;&amp; logout_form.submit();">
                            <i className="icon-lock"></i>
                            <span> Logout</span>
                        </a>
                        <form action="/seo-logout" method="POST" id="logout_form">
                            <input type="hidden" name="_token" value="kn7NgNfKLDfKHxEuL2i1TdrWenkcqT48eGGtS7Sq" />            </form>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar