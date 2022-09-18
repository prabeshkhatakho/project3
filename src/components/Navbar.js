import React from 'react'
import {Link} from "react-router-dom";
import "./navbar.css"


const Navbar=()=> {
    return (

     <nav className='navbar'>
        <h3 className='logo'> </h3>

        <ul className='nav-links'>
            <Link to='/home'>
                <li>Home</li></Link>
            <Link to='/about'>
                <li>About</li></Link>
            <Link to='/services'>
                <li>Services</li></Link>
            <Link to='/contact'>
                <li>Contact</li></Link>
            <Link to='/skills'>
                <li>Skills</li></Link>
        </ul>
     </nav>
     
        
    )
}



export default Navbar;