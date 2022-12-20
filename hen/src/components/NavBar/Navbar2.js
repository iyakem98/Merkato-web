import './NavBar.css'

import { useState } from 'react'

import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import { FaSearch } from 'react-icons/fa';

import Logo from '../../data/images/logo.jpg'




const NavBar2 = () => {
  
  

  
    return (
        <nav className= 'navbar-active'>
          <div className='logo'>
          <img className ='imm' src = {Logo} href='#'/>
          </div>
          <menu>
              <ul className='nav-links'>
                 <li><Link className= 'nonhighlight' to="/">Home</Link></li>
                 <li><Link className= 'highlight' to='/Account'>Account</Link></li>
                 <li><Link className= 'nonhighlight' to='/Banking'>Banking</Link></li>
                 <li><Link className= 'nonhighlight' to='/Updates'>Updates </Link></li>
                 <div className='forsearch'>
                  <FaSearch color='green' size={20} className='fas'/>
                    <input type = "text" placeholder= 'Search' className='search'/>
                </div>
              </ul>
          </menu>
        </nav>
     )
    
  }


export default NavBar2;