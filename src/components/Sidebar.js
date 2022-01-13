import React from 'react'

export default function Sidebar() {
    return (
        <div>
            <ul className ="navbar-nav sidebar sidebar-light accordion" id="accordionSidebar">
                <a className ="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className ="sidebar-brand-icon">
                        <img src="backend/img/logo/logo2.png" alt=''/>
                    </div>
                    <div className ="sidebar-brand-text mx-3">RuangAdmin</div>
                </a>
             
                <li className ="nav-item">
                    <a className ="nav-link" href="{}}">
                        <i className ="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>
                <hr className ="sidebar-divider"/>
            
                <hr className ="sidebar-divider"/>
                <div className ="version" id="version-ruangadmin"></div>
            </ul>
        </div>
    )
}
