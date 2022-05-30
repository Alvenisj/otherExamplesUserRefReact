import React, { useState } from 'react'
import Card from './Card';


const LoadingApp = () => {

    const [ stateShow, setStateShow ] = useState(false);
    

  return (

    <div>
        <button onClick={() => setStateShow(!stateShow)}
        >
            Show-Hide
        </button>
        {stateShow && <Card />}
        
    </div>
  )


}

export default LoadingApp;
