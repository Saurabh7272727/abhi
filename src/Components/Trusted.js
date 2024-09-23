import React from 'react'
import './Trusted.css';
import { FcGoogle } from 'react-icons/fc';
import { SiFlipkart } from 'react-icons/si';
import { FcStart } from 'react-icons/fc';
import { FcAbout } from 'react-icons/fc';
const Trusted = () => {
    return (
        <div className='tusted__company'>
            <div className='google__box'><FcGoogle /></div>
            <div className='google__box'><SiFlipkart /></div>
            <div className='google__box'><FcStart /></div>
            <div className='google__box'><FcAbout /></div>
        </div>
    )
}

export default Trusted;