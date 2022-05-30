import React, { useState, useEffect, useRef } from 'react'

export const RenderApp = () => {

    const [ stateText, setStateText ] = useState("");
    const renderRef = useRef(1);
    //const [ render, setRender ] = useState(0);

    useEffect(()=> {

        //console.log(renderRef.current++);
        console.log(renderRef.current++);
      // renderRef.current++;
       
    });

  return (

    <div>
        <input 
        type="text"
        value={stateText}
        onChange={(e)=> setStateText(e.target.value)}
        />

        <h1>Renders: {renderRef.current}</h1>

    </div>
  )
}

export default RenderApp;
