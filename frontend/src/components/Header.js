import React from 'react';
import { NavLink } from 'react-router-dom'; // Using NavLink for active styles
import '../styles/Header.css';

function Header() {
    return (
        <header className="start-header navigation-wrap">
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/reading" className="nav-link" activeClassName="active">Reading Practice</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/grammar" className="nav-link" activeClassName="active">Grammar Practice</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/speaking" className="nav-link" activeClassName="active">Speaking Practice</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
