
import React from 'react'
import './BuyList.css'
//import '../../bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Feed from '../../data/feed'
import BuyCard from './BuyCard'
import { listBanks } from '../../actions/bankActions.js'
import Loading from '../Loading'
import NavBar from '../NavBar/NavBar'



const BuyList = () => {

    const dispatch = useDispatch()

    const bankList = useSelector(state => state.bankList)

    const {loading, banks, error} = bankList

    useEffect(() => {
        dispatch(listBanks())
    }, [dispatch])
    
    
    return (
        <div className='bl'>
            <Navbar  className='lsnav'>
                <p className='blh1 text-dark'>Banks</p>
            </Navbar>
            {loading? (
                <Loading/>
            ) : error? (
                <h2> Error </h2>
            ) : 
            (
                <Container>
                <Row>
                    {banks.map((product) =>  (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <BuyCard product = {product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
            )
            }
           
        </div>
    )
}

export default BuyList
