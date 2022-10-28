import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../style/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/" end>Accueil</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar