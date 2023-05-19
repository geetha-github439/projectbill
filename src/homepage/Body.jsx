import React from 'react'
import  Typewriter from "typewriter-effect";

export const Body = () => {

  return (
    
     <div id="body">
      <div id="typing-div">
      <div id="text">
      <Typewriter
 onInit={(typewriter)=>{
  typewriter.typeString("Bill-splitting apps can be your best friend during group travels or international trips......!").changeDelay(2).start();
 }} 
 
 />
 </div>
 </div> 



   
    
 </div> 
  )
}
