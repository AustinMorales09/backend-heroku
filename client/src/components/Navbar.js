import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
             <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <NavLink to="/">Home</NavLink>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="navlinks">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/addattraction">Add Attraction</NavLink></li>
                    <li><NavLink to="/viewattractions">View Attractions</NavLink></li>
                    </ul>
                </div>
            
            </div>
        </nav>
        </header>
        </div>
    )
}

export default Navbar
