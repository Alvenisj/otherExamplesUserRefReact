import React, { useState, useEffect, useRef } from 'react';
import GetPost from './helpers/GetPost';



const Card = () => {

    const [ statePost, setStatePost ] = useState({ title : "post#1"});
    const [ stateLoading, setStateLoading ] = useState(true);
    const isMontadoRef = useRef(true);
    

   const updatePost = () => {
     GetPost()
     .then( (newPost) => {
         setTimeout(() => {
             if(isMontadoRef.current) {
                setStatePost(newPost);
                setStateLoading(false);

             }
         }, 3000);
     })
   }
    useEffect(()=> {
       updatePost();
       return () => {
        isMontadoRef.current = true;
       }
    }, []);

    if(stateLoading) return <h1>Loading...</h1>

  return (

    <div>
        <h1>{statePost.title}</h1>
    </div>
  )
}


export default Card;