


import React, { useState } from 'react'

export default function Funccomp() {
    let[counter,setcounter]=useState(1000)
    console.log(counter);
    

    // let counter=0;

    const increment=()=>{
    //    setcounter(counter+1)
    // setcounter(counter++)
    // setcounter(++counter)
    setcounter((prevvalue)=>prevvalue+1)
        
    }

    const decrement=()=>{
        // setcounter(counter-1)
        // setcounter(counter--)
        // setcounter(--counter)
        setcounter((prevvalue)=>prevvalue-1)
    }



  return (
    <div>
        <p>counter :{counter}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>



    </div>
  )
}
