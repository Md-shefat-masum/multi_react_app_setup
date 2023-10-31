import React from 'react'

function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5> Dashboard </h5>
                        </div>
                        <div className="col-lg-6"></div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="card border-widgets shadow mb-4">
                    <div className="row m-0">
                        <div className="col-xl-3 col-6 xs-width-100">
                            <div className="crm-top-widget card-body">
                                <div className="d-flex"><i className="icon-briefcase font-primary align-self-center me-3"></i>
                                    <div><span className="mt-0">Products</span>
                                        <h4 className="counter">4067</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 xs-width-100">
                            <div className="crm-top-widget card-body">
                                <div className="d-flex"><i className="icon-agenda font-secondary align-self-center me-3"></i>
                                    <div><span className="mt-0">Categories</span>
                                        <h4 className="counter">694</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 xs-width-100">
                            <div className="crm-top-widget card-body">
                                <div className="d-flex"><i className="icon-archive font-success align-self-center me-3"></i>
                                    <div><span className="mt-0">Tag</span>
                                        <h4 className="counter">1340</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-6 xs-width-100">
                            <div className="crm-top-widget card-body">
                                <div className="d-flex"><i className="icon-camera font-info align-self-center me-3"></i>
                                    <div><span className="mt-0">Images</span>
                                        <h4 className="counter">8761</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard