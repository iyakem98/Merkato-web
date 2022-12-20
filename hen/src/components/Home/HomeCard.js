
import React from 'react'
import { Card } from 'react-bootstrap'
import './HomeCard.css'
import {Link, useParams} from 'react-router-dom'

const HomeCard = ({product}) => {
    return (
        <>
        <Card className='myCardH'>
         <Card.Img className='cardImgH' variant="top" src={product.image} />
         <Card.Body>
        
         <Card.Text className='CardNH' as = 'h2'>
             {product.description}
         </Card.Text>
     
         <Card.Text as = 'div' className='CardShH' >
                Learn More
         </Card.Text>
         </Card.Body>
     </Card>
 
       </>
    )
}

export default HomeCard