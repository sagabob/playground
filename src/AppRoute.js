import React from 'react';
import logo from './assets/images/logos/tdp-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaughWink, faCodeBranch, faHome } from '@fortawesome/free-solid-svg-icons';
import { Outlet, NavLink } from "react-router-dom";
import { defaultIconColor } from './utils/colors';

const AppRoute = () => {

    return (
        <>
            <div className="navbar has-shadow is-fixed-top is-hidden-desktop">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/home">
                        <img src={logo} alt="logo" />
                    </a>
                    <div className="lite-nav-bar">
                        <ul className="icon-menu">
                            <li >
                                <NavLink to="/home" className={({ isActive }) => (isActive ? 'is-active' : "")}><span><FontAwesomeIcon icon={faHome} color={defaultIconColor} /></span></NavLink>
                            </li>

                            <li >
                                <NavLink to="/about" className={({ isActive }) => (isActive ? 'is-active' : "")}><span><FontAwesomeIcon icon={faLaughWink} color={defaultIconColor} /></span></NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'is-active' : "")}><span><FontAwesomeIcon icon={faCodeBranch} color={defaultIconColor} /></span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="main-sidebar is-hidden-touch has-shadow">
                <div className="sidebar-brand">
                    <NavLink to="/"><img src={logo} alt="Tdp-logo-main" /></NavLink>
                </div>
                <div className="sidebar-inner">
                    <ul className="icon-menu">
                        <li>
                            <NavLink to="/home" className={({ isActive }) => (isActive ? 'sidebar-item is-active' : "sidebar-item")}>
                                <div className="sidebar-item-icon"><FontAwesomeIcon icon={faHome} />
                                </div>
                                <div className="sidebar-item-text ">
                                    Home
                                </div>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => (isActive ? 'sidebar-item is-active' : "sidebar-item")}>
                                <div className="sidebar-item-icon"><FontAwesomeIcon icon={faLaughWink} />
                                </div>
                                <div className="sidebar-item-text ">
                                    About
                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'sidebar-item is-active' : "sidebar-item")}>
                                <div className="sidebar-item-icon"><FontAwesomeIcon icon={faCodeBranch} />
                                </div>
                                <div className="sidebar-item-text ">
                                    Dashboard
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div >
                <Outlet />
            </div>
        </>
    )
}

export default AppRoute