import React from 'react'
import {FcSearch} from "react-icons/fc"
function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <div className='links'>
                <h2>Ahmed</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='icons'>
                <div className='search-icon-container'>
                <FcSearch className='search-icon'/>
                </div>
                <button><a href="#contact">Message me</a></button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar