import React from 'react'
import './Logo.css'
import logo from '../../assets/images/logo.png'
const Logo = (props) => {
    return (
        <div className="logo">
           <img src={logo} alt='Logo'></img> 
        </div>
    )
}

export default Logo
