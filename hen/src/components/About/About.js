import React from 'react'
import Founders from './Founders/Founders'
import SocialMedia from './SocialMedia/SocialMedia'
import './About.css'
import {BsFillForwardFill} from 'react-icons/bs'
import {Link, useParams} from 'react-router-dom'
import Partners from './Partners/Partners'
import Descr from './Descr/Descr'
import Faq from './faq/Faq'
import Footer from './Footer/Footer'
const About = () => {
    return (
        <section id = "About">
            <div className='about'>
                
                <div className='ab1'>
                <img src='https://svg-clipart.com/svg/green/Bo2VDHM-green-money-bag-vector.svg' className='abim'/>

                    <div className='intro'>
                        <h1>LORREM IPSUM</h1>
                        <h1> IKJFD DFJL </h1>
                        <h3> THAT COW OVER THERE DOES NOT BELONG HERE </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan sodales 
                            ligula eget auctor. Pellentesque mollis viverra lorem ac luctus. Quisque nec rutrum nulla. 
                        </p>
                        <Link to = '/Account' style={{ textDecoration: 'none' }}>
                            <button className='abbut'>Get me an ACCOUNT!  <BsFillForwardFill size={50} className='bsab'/>  </button>
                        </Link>
                    </div>
                </div>
             
                <Founders/>
                <Faq/>
              
                
                
            </div>
        </section>
    )
}

export default About
