

import React, { useState } from 'react'

export default function FunctionalComp() {

let [counter,setcounter]= useState(0)
    
    // let counter=0;

    const increment=()=>{
        // counter=counter+1;
        // console.log(counter);
        setcounter(counter+1)
        
    }

    const decrement=()=>{
        // counter=counter-1;
        // console.log(counter);
        setcounter(counter-1)
        
    }
    
  return (
    <div>

        <p>Counter : {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}> Decrement</button>




    </div>
  )
}
