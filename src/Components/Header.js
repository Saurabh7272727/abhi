import React from 'react'
import './Header.css';
import Nav from './Nav.js';
const Header = () => {
    return (
        <div className='header_nav'>
            <img src='https://i.pinimg.com/originals/ab/04/be/ab04bea19474ae12eb76d838fc667fb8.jpg'></img>
            <Nav />
        </div>
    )
}

export default Header;