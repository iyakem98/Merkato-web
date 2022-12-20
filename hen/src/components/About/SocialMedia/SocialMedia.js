import React from 'react'
import { BsFacebook} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import './SocialMedia.css'

const SocialMedia = () => {
    return (
        <div className='socialmedia'>
            <p className='sm'>
                Follow us on social media!
            </p>
            <div className='forem'>
                <input type = "text" placeholder= 'Enter your email' className='em'/>
                <button className='subs'>Subscribe</button>
            </div>
          
            <div className='socialmedia_inner'>
                 <BsFacebook color='white' size={60} className='fb'/>
                 <BsTwitter color='white' size={60} className='fb'/>
                 <BsInstagram color='white' size={60} className='fb'/>
            </div>
            
            
        </div>
    )
}

export default SocialMedia
