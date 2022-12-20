import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IntroVideo from '../components/Education/EducationVideos/IntroVideo'
import IntroYoutube from '../components/Education/EducationVideos/IntroYoutube'
import { Button, ListGroup, Row, Col, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EducationList from '../components/Education/EducationCards/EducationList'



import './EducationScreen.css'



const EducationScreen = () => {
 
   const dispatch = useDispatch()
  
  const userLogin = useSelector(state => state.userLogin)

  const {userInfo} = userLogin

  return (
      
    <div className='eddiv'>
        {userInfo? (
            <div className='eduser'>
                <ListGroup variant='flushed'>
                    <ListGroupItem className='lsgus'>
                        <h2> Hello, {userInfo.firstName}! Welcome to our learning center! </h2>
                    </ListGroupItem>

                   

                </ListGroup>

                <EducationList/>

                <div className='pap'>

                </div>  
                
               
            </div>
            
        ):(
            <div>
                <div className='headed'> 
                    <ListGroup variant='flushed'>
                        <ListGroupItem className='lsg'>
                             <h2 className='justuser'>Here to learn about stocks and banking?</h2>
                        </ListGroupItem>

                      
                            <Row>
                                <Col className='edheadcol' style={{color: 'black'}}>
                                    <h1>
                                        LEARN!
                                    </h1>
                                    <h3>
                                        Our education page provides you with a <br/> comprehensive step-by-step guide <br/>
                                        to investing. Be a master at trading <br/> and finance!
                                    </h3>
                                </Col>
                                <Col className='edheadcol2' style={{color: 'black'}}>
                                    <h2>Sign in to access our full course!</h2>
                                    <Link to = '/login' style={{  textDecoration: 'none' }}>
                                        <Button className='btn btn-success btn-lg buted'> Login </Button>
                                    </Link>
                                </Col>
                            </Row>
                  

                      
                       
                    </ListGroup>
                </div>

               
                <IntroYoutube/>
            </div>
        )}
       
    </div>
  )
}

export default EducationScreen