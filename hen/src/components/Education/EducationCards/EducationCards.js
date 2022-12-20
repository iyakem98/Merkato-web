import React from 'react'
import './EducationCards.css'
import { Card, ProgressBar } from 'react-bootstrap'


const EducationCards = ({product}) => {
    return (
        <>
        <Card className='edcard'>
         <Card.Img className='edim' variant="top" src={product.image} />
         <Card.Body>
        
         <Card.Text className='text-dark' as = 'h5'>
             {product.description}
         </Card.Text>

         <Card.Text className='text-dark' as = 'p'>
             A comprehensive guide to alsk lk <br/> kfjdh sdfkjh dfskjh fd dshflk sdkjh <br/> kjdsh sjhdfh
         </Card.Text>
         <div className='edcardbott'>
            <ProgressBar striped className='pred' variant="success" now={product.prog}/>
            <Card.Text as = 'h6' className='text-dark'>
                {product.prog}% complete
            </Card.Text>
        </div>
        
         </Card.Body>
     </Card>
 
       </>
    )

}

export default EducationCards