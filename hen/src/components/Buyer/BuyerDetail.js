import {React, useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import './BuyerDetail.css'
import { listBankDetails } from '../../actions/bankActions.js'
import Loading from '../Loading'
import Chart from '../Chart/Chart'
import BankChart from './BankChart';
import { Line } from "react-chartjs-2";


const BuyerDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [qty, setQty] = useState(1)
    const {id} = useParams()

    
    useEffect(() => {
        dispatch(listBankDetails(id))
    }, [dispatch])

    const bankDetails = useSelector(state => state.bankDetails)
    const {loading, error, bank} = bankDetails

    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${qty}`)
    }

   

    return (
        <div className='BuyDet'>
            
           <Link className = 'btn btn-dark btt1' to = '/Banking'>Go back</Link>

           {loading? (
                <Loading/>
            ) : error? (
                <h2> Error </h2>
            ) : 
            (
            <>

            <div className='h1cont'>
                 <Image src = {bank.image} alt = {bank.name} fluid className='immdet'/>
                 <h1 className='h1bnk text-dark'>{bank.name}</h1>
                 
            </div>
            <div className='upcont'>
               
            <ListGroup variant = 'flush' className='carter'>
                    
                    <ListGroup.Item>
                        <Row>
                            <Col style={{ color: 'black'}} >
                                Price:
                            </Col>
                            <Col style={{ color: 'black'}}>
                                <strong>{bank.sharePrice}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col style={{ color: 'black'}} >
                                Status:
                            </Col>
                            <Col style={{ color: 'black'}}>
                                {bank.numShares > 0? 'Available '+ '('+ bank.numShares+ ' shares' + ')': 'Share not available'}
                            </Col>
                            
                        </Row>
                    </ListGroup.Item>

                    {bank.numShares > 0 && (
                        <ListGroup.Item>
                            <Row>
                                <Col style={{ color: 'black'}}> 
                                    Quantity
                                </Col>
                                <Col>
                                    <Form.Control as='select' value = {qty} onChange={(e) => 
                                    setQty(e.target.value) }>
                                        {
                                            [...Array(bank.numShares).keys()].map( x => (
                                            <option key = {x+1} value ={x+1}> {x+1} </option>
                                        ))
                                        }
                                        
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    )}

                  {bank.numShares > 0 && (
                         <ListGroup.Item>
                         <Button className='btn-block btn-success cartbut' type = 'button' onClick={addToCartHandler}>
                              Add to cart
                         </Button>
                      </ListGroup.Item>
                  )}
                   

                   
                  </ListGroup>
            </div>
            <div className='bottcont'>
               
                <div className='charr' >
                    <BankChart bank={bank}/>
                </div>
            </div>
             
         
           </>
            )
          }

           
           
        </div>
    )
};

export default BuyerDetail;
