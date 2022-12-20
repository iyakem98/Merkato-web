import React from 'react'
import './Partners.css'
import PartnerList from './Helper/PartnerList'
import BankList from '../../Header/BankPost/BankList/BankList'
const Partners = () => {
    return (
        <div className='partners'>
            <div className='parthead'>
            <h2 className='h2partners'>
                Lorem Ipsum
            </h2>
            </div>
            
            <div className='partners2'>
                <PartnerList/>
                <div className='partnersinside'>

                </div>
            </div>
        </div>
    )
}

export default Partners
