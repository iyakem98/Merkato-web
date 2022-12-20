import React from 'react'
import './PartnerPost.css'


const PartnerPost = (props) => {
    
    return (
        <div className='parcont'>
            <div className='lfpr'>
            <img src= {props.image} className='newi'/>
            </div>
            
            <div className='ripr'>
            <p className='parp'>
                 {props.description}
             </p>
            </div>
             
        </div>
    )
}

export default PartnerPost