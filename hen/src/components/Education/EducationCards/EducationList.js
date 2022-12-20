import React from 'react'
import './EducationCards.css'
import { School } from '../../../data/school'
import {Row, Col, Container} from 'react-bootstrap'
import EducationCards from './EducationCards'

const EducationList = () => {
  return (
    <div className='edlist'>
                <Container>
                <Row>
                    {School.map((product) =>  (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <EducationCards product = {product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
           
           
        </div>
  )
}

export default EducationList