import React, { useState } from 'react'
import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className='nav__bar'>
            <ul className={isMobile ? "nav-links-mobile" : "nav__link"}
                onClick={() => setIsMobile(false)}
            >
                <NavLink to='/'><li className='nav__option'>Home</li></NavLink>
                <NavLink to='/Contact'><li className='nav__option'>Contact</li></NavLink>
                <NavLink to='/Product'><li className='nav__option'>Products</li></NavLink>
                <NavLink to='/Login'><li className='nav__option'>Login</li></NavLink>
                <NavLink to='/Cart'><li className='nav__option'><i class="fa-solid fa-2xl fa-cart-shopping"></i><span>#</span></li></NavLink>
            </ul>
            <button className="mobile-menu-icon"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? (<i class="fa-solid fa-2xl fa-xmark"></i>) : (<i class="fa-solid fa-2xl fa-bars"></i>)}
            </button>
        </nav>
    )
}

export default Nav;