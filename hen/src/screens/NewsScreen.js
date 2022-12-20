import React from 'react'
import './NewsScreen.css'
import NewsHeader from '../components/News/NewsHeader'
import NewsCard from '../components/News/NewsCard'
import NewsList from '../components/News/NewsList'
import { Button } from 'react-bootstrap'

const NewsScreen = () => {
  return (
        <div className='newsScreen'>
            <NewsHeader/>
            <NewsList/>
     
           
        </div>
    
   
  )
}

export default NewsScreen

