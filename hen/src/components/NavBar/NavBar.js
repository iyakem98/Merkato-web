
import './NavBar.css'

import { useState } from 'react'

import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { FaSearch } from 'react-icons/fa';

import Logo from '../../data/images/logo.jpg'




const NavBar = () => {
  
  

  const [navbar, setNavbar] = useState(false);
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [account, setAccount] = useState(false);
  const [updates, setUpdates] = useState(false);

  

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }


  const abChan = () => {
    if (window.scrollY >= 590) {
      setAbout(true)
      setHome(false)
    }
    else {
      setAbout(false)
      setHome (true)
    }
  }

    window.addEventListener('scroll', changeBackground)
    window.addEventListener('scroll', abChan)
    
    return (
        <nav className= {navbar? 'navbar-active':'navbar'}>
          <div className='logo'>
          <img className ='imm' src = {Logo} href='#'/>
          </div>
          <menu>
              <ul className='nav-links'>
                 <li><a className={home? 'highlight': 'nonhighlight'} href='#'>Home</a></li>
                 <li><a className={about? 'highlight': 'nonhighlight'} href='#About'>About</a></li>
                 <li><Link className={account? 'highlight': 'nonhighlight'} to='/Account'>Account</Link></li>
                 <li><Link className={account? 'highlight': 'nonhighlight'} to='/Banking'>Banking</Link></li>
                 <li><Link className={updates? 'highlight': 'nonhighlight'} to='/Updates'>Updates </Link></li>
                 <div className='forsearch'>
                  <FaSearch color='green' size={20} className='fas'/>
                    <input type = "text" placeholder= 'Search' className='search'/>
                </div>
              </ul>
          </menu>
        </nav>
     )
    
  }


export default NavBar
