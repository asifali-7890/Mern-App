import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">MERN</a> 
            <ul className="navbar-nav mr-auto justify-center">
                    <li className="nav-item active">
                        <Link to='/' className="nav-link">Create post <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/all' className="nav-link">All post</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navbar