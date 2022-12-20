import React from 'react'
import './Footer.css'
import { BsFacebook} from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
     <div className='main-footer'>
        <div className='container'>
            <div className='row'>
                {}
                <div className='col-md-3 col-sm-6'>
                    <h3 className='text-dark h3foot' >Contact Us</h3>
                    <ul className='list-unstyled'>
                        <li className='text-success lifoot'><span className='spancont'>Email: </span> merkato@gmail.com</li>
                        <li className='text-success lifoot'><span className='spancont'>Phone: </span> +251913633037</li>
                        <li className='text-success lifoot'><span className='spancont'>Address: </span> Lebu Haile Garment</li>
                        <li className='text-success lifoot'><span className='spancont'>P.O BOX: </span> 12345</li>
                    </ul>
                </div>
                {}
                <div className='col-md-3 col-sm-6'>
                    <h3 className='text-dark h3foot' >Lorem Ipsum</h3>
                    <ul className='list-unstyled'>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                    </ul>
                </div>
                {}
                <div className='col-md-3 col-sm-6'>
                    <h3 className='text-dark h3foot' >Lorem Ipsum</h3>
                    <ul className='list-unstyled'>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                        <li className='text-success lifoot'>lorem ipsum</li>
                    </ul>
                </div>
                {}
                <div className='col-md-3 col-sm-6'>
                    <h3 className='text-dark h3foot' >Social Media</h3>
                    <ul className='list-unstyled'>
                    <div className='smfoot'>
                        <BsFacebook color='#212529' size={30} className='smfoot_each'/>
                        <BsTwitter color='#212529' size={30} className='smfoot_each'/>
                        <BsInstagram color='#212529' size={30} className='smfoot_each'/>
                    </div>
                       
                    </ul>
                </div>
            </div>

             {/*Footer bottom */}
            
    </div>
    <div className='footer-bottom'>
                <p className='text-xs-center text-light'>
                    &copy;{new Date().getFullYear()} <span className='companyfoot'> Merkato </span> - All rights reserved
                </p>
                <p className='text-light lastpfoot'>
                    ldl afkh askdflhj klsdah kjlh gasdklj haksdlfgh gklsdjh klsaghf kljshgf kljshfg kjslhfgds lkjgahs sd
                    kdsfjh dkljhgs dfkjhgkljas fghkjhasfgjlh fgjklash kljsfagh kljsgh lkjsag hklsjdfghkljdsfgh jklfdsg
                    skdjfh skladgjhkjsgh klsjghlksajgh jk
                </p>
                <p className='text-light lastpfoot'>
                    ldl afkh askdflhj klsdah kjlh gasdklj haksdlfgh gklsdjh klsaghf kljshgf kljshfg kjslhfgds lkjgahs sd
                    kdsfjh dkljhgs dfkjhgkljas fghkjhasfgjlh fgjklash kljsfagh kljsgh lkjsag hklsjdfghkljdsfgh jklfdsg
                    
                </p>
            </div>
     </div>

    </>
   
  )
}

export default Footer