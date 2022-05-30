import React, { useRef, useState } from 'react'


export const MediaPlayer = () => {

  const videoRef = useRef();
  const [ statePlay, setStatePlay ] = useState(false);

  const handlPlay = () => {

    const video = videoRef.current;
    
    statePlay ? video.pause() :  video.play();
    setStatePlay(!statePlay);
    //console.log(video);

  }

  return (
    <div>

      <video width="300" ref={videoRef} onClick={handlPlay}>
        <source src= "video/planet.mp4" type="video/mp4"/>
        
      </video>
      <button onClick={handlPlay}>
        { statePlay ? 'Pause' : 'Play' }
      </button>
    
    </div>
    

  )
}


export default MediaPlayer;
