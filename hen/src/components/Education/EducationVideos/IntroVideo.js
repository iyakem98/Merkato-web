import React from 'react'
import VideoPlayer from 'react-video-js-player'

const IntroVideo = () => {
  const videosrc = "https://www.youtube.com/watch?v=tmryHfunyQ4";
  const poster = "https://image.shutterstock.com/image-photo/investing-stock-market-concept-gain-260nw-750493204.jpg"
  return (
    <div>
        <h1>Intro Video</h1>
        <VideoPlayer
            src = {videosrc} poster = {poster} width = '720' height = "420"
        >

        </VideoPlayer>
    </div>
  )
}

export default IntroVideo