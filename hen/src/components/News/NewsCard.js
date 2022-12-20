import React from 'react'
import {Card, Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NewsCard.css'
const NewsCard = ({nws}) => {
  return (
      <Link to= {{ pathname: {nws} }} target="_blank" style={{ textDecoration: 'none' }}>
        <Card className='ncard1'>
            <Card.Img className='ncardim' variant="top" src={nws.image} />
            <Card.Body>
            <div className='ncardtextdiv'>
            <Card.Text className='text-dark ncardtext' as = 'h5'>
                {nws.title}
            </Card.Text>
            </div>
            <Card.Text className='text-secondary ncarddate' as = 'p'>
                {nws.date}
            </Card.Text>
            </Card.Body>
        </Card>
      </Link>

       

  
    
  )
}

export default NewsCard