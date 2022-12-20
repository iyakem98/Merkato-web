import React from 'react'
import { useState, useEffect } from 'react'
//import { Feed } from '../../../../data/feed'
import BankPost from '../BankPost'
import './BankList.css'
import axios from 'axios'

const BankList = () => {

    const [Feed, setFeed] = useState([])

    useEffect(() => {
        const fetchBanks = async () => {
            const {data} = await axios.get('/api/banks')
            
            setFeed(data)
        }

        fetchBanks()
    }, [])
    return (
        <div className='lister'>
           
            {Feed.map((val) => {

                return (
                    <BankPost  
                        id = {val.id}
                        image = {val.image}
                        name = {val.name} />
                )
                
                
            } )} 
           
           
           
        
        </div>
    )
        
}

export default BankList
