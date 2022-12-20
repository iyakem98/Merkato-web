import React from 'react'
import { Card } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'

const CryptoCard = ({product}) => {
    return ( 
        <Card className='my-1 p-2 rounded'>
            <a href='#'/>

                <Card.Body>
                    <Card.Title as = 'div'> 
                        <h3>Hi</h3>
                    </Card.Title>
                    <Card.Text as = 'div'>
                        {product.name} 
                    </Card.Text>
                    
                </Card.Body>
        </Card>
    )
}

export default CryptoCard
