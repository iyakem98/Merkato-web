
import React from 'react'
import { Card } from 'react-bootstrap'
import './BuyCard.css'
import {Link, useParams} from 'react-router-dom'

const BuyCard = ({product}) => {
    return (
      <Link to= {`banking/${product._id}`} style={{ textDecoration: 'none' }} >
        <Card className='my-1 p-2 rounded myCard'>
            <a href='#'/>
            <Card.Img src={product.image} className='cardImg'/>

                <Card.Body>
                    <Card.Title as = 'div' className='CardN'> 
                        <h3>{product.name}</h3>
                    </Card.Title>
                    <Card.Text as = 'div' className='CardSh'>
                        ETB ${product.sharePrice} 
                    </Card.Text>
                    
                </Card.Body>
        </Card>
    </Link>
    )
}

export default BuyCard
