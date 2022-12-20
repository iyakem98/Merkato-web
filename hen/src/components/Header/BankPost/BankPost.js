import React from 'react'
import './BankPost.css'
import { Feed } from '../../../data/feed';

const BankPost = (props) => {
    
    return (
        <div className='bancont'>
             <img src= {props.image} className='iii'/>
             <p className='banp'>
                 {props.name}
             </p>
        </div>
    )
}

export default BankPost
