import React from 'react'
import { Line } from "react-chartjs-2";

const Chart = () => {

    const data = {
        labels: ["January", "February", "March",
          "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
          {
            label: "Worth of shares",
            data: [2, 5, 7, 9, 7, 6, 4, 7, 5, 3, 12, 5],
            fill: true,
            backgroundColor: "rgba(6, 156,51, .3)",
            borderColor: "#02b844",
            width: '440px',
            height: '44px'
            
          }
        ]
      
      }
   

  return (
    <>
      <Line data={data} height= {1000} width = {2000} />
    </>
  )
}

export default Chart