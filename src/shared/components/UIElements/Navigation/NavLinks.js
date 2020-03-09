import React from 'react'
import {NavLink} from 'react-router-dom' // special function de Router que permite cierto degree de manipulación de los hipervinculos

import './NavLinks.css'


const NavLinks = (props) => {

    return <ul className="nav-links">

    <li> <NavLink to="/" exact> ALL USERS </NavLink> </li>  {/* recibe exact para que tenga en cuenta solo cuando se está en /, y no /something. */}

    <li> <NavLink to="/u1/places"> MY PLACES </NavLink> </li>

    <li> <NavLink to="/places/new"> NEW PLACE </NavLink> </li>

    <li> <NavLink to="/auth"> AUTHENTICATE </NavLink> </li>


    </ul> 


}

export default NavLinks