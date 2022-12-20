import React from 'react'
import PartnerPost from './PartnerPost'
import './PartnerList.css'
import { Feed2 } from '../../../../data/feed2'

const PartnerList = () => {
    return (
        <div className='listr'>
           
            {Feed2.map((val) => {

                return (
                    <PartnerPost  
                        id = {val.id}
                        image = {val.image}
                        description = {val.description} />
                )
                
                
            } )} 
           
           
           
        
        </div>
    )
        
}

export default PartnerList