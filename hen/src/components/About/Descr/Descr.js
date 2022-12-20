import React from 'react'
import './Descr.css'

import {BsHexagonFill} from "react-icons/bs"
import {BsWallet} from 'react-icons/bs'
import {BsKanban} from 'react-icons/bs'
import {BsTv} from 'react-icons/bs'
import {BsTools} from 'react-icons/bs'
import {BsTelephoneForward} from 'react-icons/bs'
import {BsVinyl} from 'react-icons/bs'
const Descr = () => {
    return (
        <div className='discr'>

            <BsHexagonFill color='darkorange' size={100} className='hex'/>

            <div className='discr2'>
                <img src='https://previews.123rf.com/images/ylivdesign/ylivdesign1804/ylivdesign180405810/100022702-insurance-money-icon-green-vector-isolated-on-green-background-.jpg' className='descrim'/>
                <div className='discrlist'>
                    <div className='picnwrite'>
                        <BsTv color='rgba(0, 255, 0, 0.753)' size={120} className='tv'/>
                        <div className='write'>
                            <h3 className='desh3'>Number 1</h3>
                            <p className='desp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id risus faucibus lacus rutrum tempor. 
                                                Nullam commodo luctus dolor quis cursus. </p>
                        </div>
                    </div>
                    <div className='picnwrite'>
                        <BsTools color='rgba(0, 255, 0, 0.753)' size={120} className='tv'/>
                        <div className='write'>
                            <h3 className='desh3'>Number 1</h3>
                            <p className='desp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id risus faucibus lacus rutrum tempor. 
                                                Nullam commodo luctus dolor quis cursus. </p>
                        </div>
                    </div>
                    <div className='picnwrite'>
                        <BsTelephoneForward color='rgba(0, 255, 0, 0.753)' size={120} className='tv'/>
                        <div className='write'>
                            <h3 className='desh3'>Number 1</h3>
                            <p className='desp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id risus faucibus lacus rutrum tempor. 
                                                Nullam commodo luctus dolor quis cursus.</p>
                        </div>
                    </div>
                    <div className='picnwrite'>
                        <BsVinyl color='rgba(0, 255, 0, 0.753)' size={120} className='tv'/>
                        <div className='write'>
                            <h3 className='desh3'>Number 1</h3>
                            <p className='desp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id risus faucibus lacus rutrum tempor. 
                                                Nullam commodo luctus dolor quis cursus.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Descr
