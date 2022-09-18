import React from 'react'
import {  useState } from "react"
import "./header.css"
import  Escudo  from "./img/escudo.png"
import {AiOutlineClose} from "react-icons/ai"
import {GiHamburgerMenu} from "react-icons/gi"
import { Menu } from "./menu"
import { Link } from "react-router-dom"

export const Header = () => {

const [showMenu, setShowMenu] = useState(false)
const showOrHide = () => setShowMenu(true)
const hideMenu = () => setShowMenu(false)

  return (
    <header>
      <Link to="/">
        <img className="escudo" src={Escudo} onClick={hideMenu}/>
      </Link>

      <nav>
        <button className="botao-menu">
          <GiHamburgerMenu onClick={showOrHide}/>
        </button>
        
        { showMenu &&
         <ul className="menu-mobile">
            <button className="botao-menu">
              <AiOutlineClose onClick={hideMenu} />
            </button>
            <Menu/>
        </ul>}
        
         
          <ul className="menu-desktop">
             <Menu />
          </ul>
        
  
      </nav>
    </header>
  )
  
}