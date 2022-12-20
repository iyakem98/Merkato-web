import React from 'react'
import './HomeList.css'
//import '../../bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Feed3 } from '../../data/feed3'
import HomeCard from './HomeCard'
import { listBanks } from '../../actions/bankActions.js'
import Loading from '../Loading'
import NavBar from '../NavBar/NavBar'



const HomeList = () => {

    
    
    return (
        <div className='hl1'>
                <Container>
                <Row>
                    {Feed3.map((product) =>  (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <HomeCard product = {product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
           
           
        </div>
    )
}

export default HomeList
