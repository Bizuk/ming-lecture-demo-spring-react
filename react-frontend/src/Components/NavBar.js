import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
    <ul>
        <li><NavLink to ="/">Home</NavLink></li>
        <li><NavLink to ="/create">Create</NavLink></li>
    </ul>
    )
}

export default NavBar;