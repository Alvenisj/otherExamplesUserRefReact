import React, { useState, useRef } from 'react'

const CopyApp = () => {

    const [ text, setText ] = useState('Hi from state');
    const [ isCopied, setIscopied ] = useState(false);
    const inputRef = useRef();

    const handleCopy = () => {

        const input = inputRef.current;
        //console.log(input.value);
        input.select();
        document.execCommand('copy');
        setIscopied(true);
        setTimeout(()=> setIscopied(false), 3000);
    }


  return (

    <div>
        <input 
        ref={inputRef}
        placeholder="Ingrese valor"
        type="text"
        value={text}
        onChange={(e)=> setText(e.target.value)}/>

        <button onClick={handleCopy}>
            Copy
        </button>
        {/**/}
        { isCopied &&  <h1>Copied successfully</h1> }
       
    </div>
  )
}


export default CopyApp;
