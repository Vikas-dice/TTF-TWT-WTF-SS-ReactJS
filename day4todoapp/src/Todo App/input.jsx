

import React, { useState } from 'react'

export default function Input(props) {
  console.log("coming props",props);
  
  const[todo,settodo]=useState("")

  const changeinput=(event)=>{
    console.log("hellom world ");
    
    console.log(event.target.value);
    settodo(event.target.value)
    


  }

  const submitinput=(event)=>{
    event.preventDefault()

    console.log("submit button fired");
    // props.addtodo(todo)
    props.addtodo(todo)

    settodo("")
    


  }
  return (
    <div>

<form className="row mt-4" onSubmit={submitinput}>
  <div className="col-8 mx-5">
   
    <input type="text" 
     className="form-control" 
     placeholder="Please Enter Some todos ..!"
     value={todo}
     onChange={changeinput}
     
     
     />
  </div>

  <div className="col-4" >
    <button type="submit"
     className="btn btn-primary mb-3"
     >Add Todo</button>
  </div>
</form>


    </div>
  )
}
