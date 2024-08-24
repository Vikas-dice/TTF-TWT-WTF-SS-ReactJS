

import React, { useState } from 'react'

export default function Input(props) {
  console.log("coming props",props);
  
  const[todo,settodo]=useState("")
  const [error,seterror]=useState(false)

  const changeinput=(event)=>{
    console.log("hellom world ");
    
    console.log(event.target.value);

    if(event.target.value.length>0){
      seterror(false)
      settodo(event.target.value)
      // seterror(false)
    }else{
      seterror(true)
    }
   
    // if(event.target.value.length>0){
    //   settodo(event.target.value)
    //   // seterror(true)

    // }else{
    //   seterror(true)
     
    // }
   
    


  }

  const submitinput=(event)=>{
    event.preventDefault()

    console.log("submit button fired");
    // props.addtodo(todo)

    // if(event.target.value){
    //   props.addtodo(todo)
    //   seterror(false)

    // }else{
    //   seterror(true)
      
    // }

    if(todo.length>0){
      props.addtodo(todo)

    }else{
      seterror(true)
    }

    
   
    

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
     {
      error &&  <p className='text text-danger'>Enter some todo to continue</p>
     }




    
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
