import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
             <header>
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <Link to="/">Home</Link>
                </div>
                <div id="mainListDiv" className="main_list">
                    <ul className="links">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/addattraction">Add Attraction</Link></li>
                    <li><Link to="/viewattractions">View Attractions</Link></li>
                    </ul>
                </div>
            
            </div>
        </nav>
        </header>
        </div>
    )
}

export default Navbar
