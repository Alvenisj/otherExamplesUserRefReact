import React, { useState, useRef } from 'react'



const FocusApp = () => {

const [ text, setText ] = useState('');
const inputRef = useRef();

const handleFocus = () => {
    //const input = document.getElementById("input");
    //input.value = "Texto mutado o cambiado"
    //input.focus();
    //console.log(input.value);
    //console.log(input.value);
    //input.value = "valor mutado";
    const input = inputRef.current;
    input.focus();

}

  return (

    <div>

        <input 
        ref={inputRef}
        type="text"
        placeholder="Ingrese el valor"
        value={text}
        onChange={ (e)=> setText(e.target.value)}
         />
         <button onClick={handleFocus}>
             Focus
         </button>

    </div>
  )
}


export default FocusApp;

