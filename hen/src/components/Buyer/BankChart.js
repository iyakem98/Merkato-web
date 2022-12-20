import React from 'react'
import {useState, useEffect} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import './BuyerDetail.css'
import { listBankDetails } from '../../actions/bankActions.js'
import Loading from '../Loading'
import { Line } from "react-chartjs-2";

const BankChart = ({bank}) => {
   

    
  
   
    const data = {
        labels: ["January", "February", "March",
          "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: bank.name + " share prices",
            data: bank.values,
            fill: true,
            backgroundColor: "rgba(6, 156,51, .3)",
            borderColor: "#02b844",
            width: '440px',
            height: '440px'
            
          }
        ]
      
      }
  return (
    <>
    <Line data={data} />
  </>
  )
}

export default BankChart