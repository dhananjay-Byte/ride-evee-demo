import React from 'react'
import './navbar.css'
function Navbar() {
    return (
        <div className='navbar-container'>
            <ul>
                <li>
                    <img className='logo' src='ride-evee-logo.png' alt='logo-image' />
                </li>
                <li>
                    <img src='nav-center-image.png' alt='logo' />
                </li>
                <div className='right-bar'>
                    <li style={{width:'108px',height:'57.94px'}}>
                        <img src='download.png' alt='download logo'/>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar