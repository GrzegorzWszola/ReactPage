import React from "react"
import { Route, Routes, Link } from "react-router-dom"

import './header.css'

const Header = () =>{
    return(
        <div className="Header">
            <div className="Header_Logo">
                Text
            </div>
            <nav className="Header_Navbar">
                <a className="Header_Link" href="#Home">Home</a>
                <a className="Header_Link" href="#About">About</a>
                <Link className="Header_Link" to={'/Projects'}>Projects</Link>
                <Link className="Header_Link" to={'/Contacts'}>Contacts</Link>
            </nav>    
        </div>
    )
}

export default Header