import React from 'react';

export default function Dashboard() {
    return (
        <div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="./">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                </ol>
            </div>
            <div className="row mb-3">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">Today Sell Amount</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$ {'{'}{'{'} todaysell {'}'}{'}'}</div>
                                    <div className="mt-2 mb-0 text-muted text-xs">
                                        <span className="text-success mr-2"><i className="fa fa-arrow-up" /> 3.48%</span>
                                        <span>Since last month</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-calendar fa-2x text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">Today Income</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$ {'{'}{'{'} income {'}'}{'}'} </div>
                                    <div className="mt-2 mb-0 text-muted text-xs">
                                        <span className="text-success mr-2"><i className="fas fa-arrow-up" /> 12%</span>
                                        <span>Since last years</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-shopping-cart fa-2x text-success" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">Today Due</div>
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">$ {'{'}{'{'} due {'}'}{'}'} </div>
                                    <div className="mt-2 mb-0 text-muted text-xs">
                                        <span className="text-success mr-2"><i className="fas fa-arrow-up" /> 20.4%</span>
                                        <span>Since last month</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-users fa-2x text-info" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-uppercase mb-1">Today Expense</div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$ {'{'}{'{'} expense {'}'}{'}'} </div>
                                    <div className="mt-2 mb-0 text-muted text-xs">
                                        <span className="text-danger mr-2"><i className="fas fa-arrow-down" /> 1.10%</span>
                                        <span>Since yesterday</span>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-comments fa-2x text-warning" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
