import React from 'react'
import { Route } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
//import SearchBox from './SearchBox'
import { logout } from '../../actions/userAction'
import {Link} from 'react-router-dom'
import Logo from '../../data/images/logo.jpg'
import './Navv.css'

const Navv = () => {

  const dispatch = useDispatch()
  
  const userLogin = useSelector(state => state.userLogin)

  const {userInfo} = userLogin

  const [home, setHome] = useState(true);
  const [banking, setBanking] = useState(false);
  const [updates, setUpdates] = useState(false);
  const [signin, setSignin] = useState(false);

  const [Color, setColor] = useState(["white"])
  const handleColor= e =>{ 
     setColor("green")
      
  }
  

  const logoutHandler = () => {
      dispatch(logout())
  }

  

  return (
    <header className='nnn'>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className='text-capitalize'>
        <Container>
        <div className='logo'>
          <img className ='imm' src = {Logo} href='#'/>
          </div>
          <Link className = 'text-dark' to = '/' style={{ textDecoration: 'none'}}>
             <Navbar.Brand className='nav-link active'>Home</Navbar.Brand>
          </Link>

          <Link to = '/Banking' className='navls' style={{  textDecoration: 'none' }}>
              <nav-item>Banking</nav-item>
            </Link>

            <Link to = '/Updates' className='navls' style={{  textDecoration: 'none' }}>
              <nav-item>Updates</nav-item>
            </Link>

            
            <Link to = '/Education' className='naved' style={{  textDecoration: 'none' }}>
            <nav-item>EDUCATION</nav-item>
            </Link>
      
            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
           
            <Nav className="ms-auto">
              {userInfo? (
                <Link className='lnn' to= '/cart' style={{ textDecoration: 'none' }}>
                <nav-item><i className='fas fa-shopping-cart'></i>Cart</nav-item>
            </Link>
              ):(
                <Link className='lnn' to= '/login' style={{ textDecoration: 'none' }}>
                <nav-item><i className='fas fa-shopping-cart'></i>Cart</nav-item>
            </Link>
              )}
               
               
                {userInfo? (

                  

                  
                    <NavDropdown className='lnn' title={userInfo.firstName} id = 'username'>
                        
                        <NavDropdown.Item className='drnav' as={Link} to="/Profile">Profile</NavDropdown.Item>
                     
                        <NavDropdown.Item className='drnav'>{userInfo.current_balance}</NavDropdown.Item>
                        <NavDropdown.Item className='drnav' onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                ): 
                <Link className='lnn' to = '/login' style={{ textDecoration: 'none' }}> 
                     <nav-item><i className='fas fa-user'></i>Sign in</nav-item>
                </Link>
               
                }

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button className='btn-success'>Search</Button>
            </Form>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </header>
  )
}

export default Navv