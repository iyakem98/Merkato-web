import React from 'react';
import { useState, useEffect } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { register, getUserLogin, getUserDetails } from '../actions/userAction';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Chart from '../components/Chart/Chart';

import { Redirect } from 'react-router-dom';
//import './RegisterScreen.css'
import Message from '../components/Message';

const ProfileScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const userDetails = useSelector(state => state.userDetails)

    const {loading, error, user} = userDetails

    const userLogin = useSelector(state => state.userLogin)

    const {userInfo} = userLogin
    

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage('Passwords don not match')
        }
        else {
            //dispatch update profile
        }
    }
    
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        }
        else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            }
            else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [userInfo, history, dispatch])

  return (
      <div className='logdiv'>
           <h2 bg="dark">{user.name}</h2>
          <Chart />
           <Row>
               <Col md={3}>
                    <h1>User Profile</h1>
                    {message && <Message variant='danger'>{message}</Message>}
                    {error && <Message variant='danger'>{error}</Message>}
                    {loading && <Loading/>}
                    <Form onSubmit={submitHandler}>
                        
                        <Form.Group controlId='name'>
                            <Form.Label>
                                Name
                            </Form.Label>
                            <Form.Control
                                type='name'
                                placeholder='Enter your name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='email'>
                            <Form.Label>
                                Email Address
                            </Form.Label>
                            <Form.Control
                                type='email'
                                placeholder='Enter email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='password'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Confirm password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            >
                            </Form.Control>
                        </Form.Group>

                        <Button type ='submit' variant = 'primary'>
                                Update
                        </Button>
                    </Form>
               </Col>
               
              <Col md={9}>
                  My Orders
              </Col>

           </Row>
      </div>
     
  )
};

export default ProfileScreen;
