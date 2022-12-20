import React from 'react'
import './Header.css'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {FaLongArrowAltRight} from 'react-icons/fa'
import BankList from './BankPost/BankList/BankList'

const Header = () => {
    return (
        <div className='head'>
            <h1 className='hdh1'>
                Buying shares has never been easier!
            </h1>
      
               <BankList/>
         
            <button className='hbtn'> <FaLongArrowAltRight size={80} className='arr'/> </button>
            <div className='floating-icon'>
                <a href='#About'>
                    <BsFillArrowDownCircleFill color='rgba(0, 255, 0, 0.753)' size={60} className='mouse'/>
                </a>
            </div>
            
                
       
        </div>
    )
}

export default Header
