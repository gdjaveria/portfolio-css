"use client";

import React, { useState } from 'react'

import './Navbar.css'
import Image from 'next/image'
import {AiOutlineMenu,AiOutlineClose}from "react-icons/ai";


const Navbar = () => {

const [isMenuOpen,setIsMenuOpen]=useState(false);

const toggleMenu=()=>{
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <div className='navbar'>
        <Image src ="/p.logo00.png" 
        width={100} 
        height={100}
        alt="logo"/>

        
        <ul className={`navbar-links ${isMenuOpen ? 'open' :''}`}>
          <li className='navbar-link'>
            <a href='#hero'>Home</a>
          </li>
          
          <li className='navbar-link'>
            <a href='#about'>About</a>
          </li>

          <li className='navbar-link'>
            <a href='#projects'>Projects</a>
          </li>

          <li className='navbar-link'>
            <a href='#contact'>Contact</a>
          </li>

        </ul>


<div className='navbar-menu-icon' onClick={toggleMenu}>
  {isMenuOpen ? <AiOutlineClose size={30}/>:<AiOutlineMenu size={30}/>}
</div>
 



{isMenuOpen && (
  <ul className={`navbar-menu ${isMenuOpen ? 'open': ''}`}>
  <li className='navbar-link'>
    <a href='#hero' onClick={toggleMenu}>Home</a>
  </li>

  <li className='navbar-link'>
    <a href='#about' onClick={toggleMenu}>About</a>
  </li>

  <li className='navbar-link'>
    <a href='#projects' onClick={toggleMenu}>Projects</a>
  </li>

  <li className='navbar-link'>
    <a href='#contact' onClick={toggleMenu}>Contact</a>
  </li>
</ul>
)}


</div>
    
  )
}

export default Navbar;