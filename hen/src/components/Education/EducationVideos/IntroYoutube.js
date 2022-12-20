import React from 'react'
import ReactPlayer from 'react-player'
import './IntroYoutube.css'

const IntroYoutube = () => {
  return (
    <div className='introclass'> 
       
        <ReactPlayer 
            controls 
            url="https://www.youtube.com/watch?v=tmryHfunyQ4"
            className="react-player"
            width='1200px'
            height = '650px'
           
            />
        
        <div className='undervid bg-dark'>
          <h4>
            Intro video about the basics of finance and investing.
          </h4>
        </div>
    </div>
  )
}

export default IntroYoutube