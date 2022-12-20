import React from 'react'
import './NewsList.css'
//import '../../bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { News } from '../../data/news'
import NewsCard from './NewsCard'
import { listBanks } from '../../actions/bankActions.js'
import Loading from '../Loading'
import NavBar from '../NavBar/NavBar'



const NewsList = () => {

    
    
    return (
        <div className='nl1'>
                <Container>
                <Row>
                    {News.map((nws) =>  (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <NewsCard nws = {nws}/>
                        </Col>
                    ))}
                </Row>
            </Container>
           
           
        </div>
    )
}

export default NewsList
