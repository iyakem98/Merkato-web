import React from 'react';
import { useState, useEffect } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { register } from '../actions/userAction';
import { Link, useLocation, useHistory } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import { Redirect } from 'react-router-dom';
//import './RegisterScreen.css'
import Message from '../components/Message';

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const userRegister = useSelector(state => state.userRegister)

    const {loading, error, userInfo} = userRegister
    
    const redirect = location.search? location.search.split('=')[1]: '/Banking'

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword){
            setMessage('Passwords do not match')
        }
        else {
            dispatch(register(firstName, lastName, email, password))
        }
    }
    
    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

  return (
      <div className='logdiv'>
           <FormContainer>
          <h1 className='h1log'>Create an Account</h1>
         {message && <Message variant='danger'>{message}</Message>}
         {error && <Message variant='danger'>{error}</Message>}
         {loading && <Loading/>}
          <Form onSubmit={submitHandler}>
            
            <Row>
                <Col>
                    <Form.Group controlId='firstname' className='frmgrp'>
                    <Form.Label className='text-dark'>
                        First Name
                    </Form.Label>
                    <Form.Control
                        type='firstName'
                        placeholder='Enter your first name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId='lastname' className='frmgrp'>
                    <Form.Label className='text-dark'>
                        Last Name
                    </Form.Label>
                    <Form.Control
                        type='lastName'
                        placeholder='Enter your last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    >
                    </Form.Control>
              </Form.Group>
                </Col>
            </Row>
           

              <Form.Group controlId='email' className='frmgrp'>
                  <Form.Label className='text-dark'>
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

              <Form.Group controlId='password' className='frmgrp'>
                  <Form.Label className='text-dark'>
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

              <Form.Group controlId='confirmPassword' className='frmgrp'>
                  <Form.Label className='text-dark'>
                      Confirm Password
                  </Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Confirm password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  >
                  </Form.Control>
              </Form.Group>

              <Button type ='submit' variant = 'primary' className='btn btn-block btn-success bttt'>
                    Register
              </Button>
          </Form>

          <Row className='py-3'>
              <Col className='logcollast'>
                Have an account? <Link className='text-success' to = {redirect ? `/login?redirect=${redirect}`: `/login`}>Login</Link>
              </Col>
          </Row>
      </FormContainer>
      </div>
     
  )
};

export default RegisterScreen;
