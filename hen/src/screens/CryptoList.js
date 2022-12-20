import React from 'react'
//import '../../bootstrap.min.css'
import {Row, Col} from 'react-bootstrap'
import './CryptoList.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { listCrypto } from '../actions/cryptoActions'
import Loading from '../components/Loading'
import CryptoCard from './CryptoCard'



const CryptoList = () => {
    const dispatch = useDispatch()

    const cryptoList = useSelector(state => state.cryptoList)

    const {loading, crypto, error} = cryptoList

    useEffect(() => {
        dispatch(listCrypto())
    }, [dispatch])
    
  return (
    <div className='crhead'>
        <h1>
            hello crypto
        </h1>
        <Row>
            {crypto.map((product) =>  (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <CryptoCard product = {product}/>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default CryptoList