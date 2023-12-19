import React from "react";
import {NavLink} from 'react-router-dom';

import Logo from '../assets/Logo.svg';
import "../styles/Components.css"

function Nav () {
    return (
        <>
            <nav className="Nav">
                <NavLink to="/">{<img src={Logo}/>}</NavLink>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="#">About</NavLink></li>
                    <li><NavLink to="#">Menu</NavLink></li>
                    <li><NavLink to="#">Reservations</NavLink></li>
                    <li><NavLink to="#">Order Online</NavLink></li>
                    <li><NavLink to="#">Login</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;