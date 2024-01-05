import { React, useState } from "react"
import { Route, Routes, Link } from "react-router-dom"

import './header.css'

const Header = () =>{
    const [Burger_Bar, setBurgerClass] = useState("Header_BurgerMenu_Component unclicked")
    const [menu, setMenuClass] = useState("Header_Navbar hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const UpdateMenu = () => {
        if(isMenuClicked && window.innerWidth <= 520){
            setBurgerClass("Header_BurgerMenu_Component clicked")
            setMenuClass("Header_Navbar visible")
        } else {
            setBurgerClass("Header_BurgerMenu_Component unclicked")
            setMenuClass("Header_Navbar hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div className="Header">
            <div className="Header_Logo">
                Text
            </div>
            <nav className="Header_Navbar_FS">
                <a className="Header_Link" href="#Home" onClick={UpdateMenu}>Home</a>
                <a className="Header_Link" href="#About" onClick={UpdateMenu}>About</a>
                <Link className="Header_Link" to={'/Projects'}>Projects</Link>
                <Link className="Header_Link" to={'/Contacts'}>Contacts</Link>
            </nav>
            <div className="Header_BurgerMenu" onClick={UpdateMenu}>
                <div className={Burger_Bar}></div>
                <div className={Burger_Bar}></div>
                <div className={Burger_Bar}></div>
            </div>
            <nav className={menu}>
                <a className="Header_Link" href="#Home" onClick={UpdateMenu}>Home</a>
                <a className="Header_Link" href="#About" onClick={UpdateMenu}>About</a>
                <Link className="Header_Link" to={'/Projects'}>Projects</Link>
                <Link className="Header_Link" to={'/Contacts'}>Contacts</Link>
            </nav>
        </div>
    )
}

export default Header