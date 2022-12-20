import React from 'react'
import './HomeScreen.css'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {FaLongArrowAltRight} from 'react-icons/fa'
import BankList from '../components/Header/BankPost/BankList/BankList'
import HomeList from '../components/Home/HomeList'

const HomeScreen = () => {
    return (
        <div className='hm'>
            <h1 className='hmh1'>
            Welcome to Merkato Trading!
            </h1>
                <HomeList/>
            <div className='floating-icon'>
                <a href='#About'>
                    <BsFillArrowDownCircleFill color='rgba(0, 255, 0, 0.753)' size={60} className='mouse'/>
                </a>
            </div>
            
                
       
        </div>
    )
}

export default HomeScreen
