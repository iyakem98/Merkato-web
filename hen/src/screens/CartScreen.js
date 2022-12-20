import React from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import './CartScreen.css'


const CartScreen = () => {
    const {id} = useParams()
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()

    const qty = location.search? Number(location.search.split('=')[1]): 1
    

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    
    useEffect(() => {
        if (id){
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        console.log('checked out')
    }
  return (
    <Row className='rrcart'>
        <Col md = {8}>
            <h1 className='h1cart'>{userInfo.firstName}'s Shopping Cart</h1>
            {cartItems.length === 0? <h2 className='text-dark'>Your cart is empty <Link className='text-success' to ='/Banking'>Go back</Link></h2>: (
                <ListGroup variant='flush'>
                    {cartItems.map(item => (
                        <ListGroup.Item key = {item.bank}>
                            <Row>
                                <Col md = {2}>
                                    <Image src = {item.image} alt = {item.name} fluid rounded />
                                </Col>
                                <Col md = {3}>
                                    <Link className='text-success' style={{ textDecoration: 'none', fontSize: '20px' }} to = {`/banking/${item.bank}`}>{item.name}</Link>
                                </Col>
                                <Col md = {2} style={{ color: 'black'}}>
                                    ETB {item.sharePrice}
                                </Col>
                                <Col md = {2} style={{ color: 'black'}}>
                                    <Form.Control as='select' value = {item.qty} onChange={(e) => 
                                        dispatch(addToCart(item.bank, Number(e.target.value))) }>
                                            {
                                                [...Array(item.numShares).keys()].map( x => (
                                                <option key = {x+1} value ={x+1}> {x+1} </option>
                                            ))
                                            }
                                            
                                        </Form.Control>
                                </Col>

                                <Col md = {2} style={{ color: 'black'}}>
                                    <Button type='button' variant = 'light' onClick={() => removeFromCartHandler(item.bank)}>
                                        <i className='fa fa-trash' style={{ color: 'black'}}></i>
                                    </Button>
                                </Col>
                                
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) }
        </Col>

        <Col md = {4} className='secCol'>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>SUBTOTAL ({
                            cartItems.reduce((acc, item) => acc + item.qty, 0)
                            }) SHARES </h3>

                            <p className='pcart'> 
                                ETB ${cartItems.reduce((acc, item) => acc + item.qty* item.sharePrice, 0).toFixed(2)}
                            </p>
                           
                    </ListGroup.Item>
                    <ListGroup.Item>
                       <Button
                        type='button'
                        className='btn btn-block btn-success btcart'
                        disabled = {cartItems.length === 0}
                        onClick={checkOutHandler}
                       >
                           Buy Shares
                       </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>

      
    </Row>
    );
};

export default CartScreen;
