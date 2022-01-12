import React from 'react'

export default function Topbar() {
    return (
        <div>
            <nav className ="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
                <button id="sidebarToggleTop" className ="btn btn-link rounded-circle mr-3">
                    <i className ="fa fa-bars"></i>
                </button>
                <ul className ="navbar-nav ml-auto">
                    <li className ="nav-item dropdown no-arrow">
                        <a className ="nav-link dropdown-toggle" href="{}" id="searchDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className ="fas fa-search fa-fw"></i>
                        </a>
                        <div className ="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className ="navbar-search">
                                <div className ="input-group">
                                    <input type="text" className ="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                                        aria-label="Search" aria-describedby="basic-addon2" style={{borderColor: '#3f51b5'}} />
                                    <div className ="input-group-append">
                                        <button className ="btn btn-primary" type="button">
                                            <i className ="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <div className ="topbar-divider d-none d-sm-block"></div>
                    <li className ="nav-item dropdown no-arrow">
                        <a className ="nav-link dropdown-toggle" href="{ }" id="userDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img className ="img-profile rounded-circle" src="backend/img/boy.png" alt='' style={{maxWidth: "60px"}} />
                            <span className ="ml-2 d-none d-lg-inline text-white small">Maman Ketoprak</span>
                        </a>
                        <div className ="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <a className ="dropdown-item" href="{ }">
                                <i className ="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>

                            <div className ="dropdown-divider"></div>
                            <a className ="dropdown-item" href="{{ route('logout') }}">
                                <i className ="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
