import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Input() {

  let [todo,settodo]=useState('')
  let[error,seterror]=useState(false)


  const changeInput=(event)=>{

    console.log(event.target.value);
 
    if(event.target.value.length>0){
      settodo(event.target.value)
      seterror(false)
    }

   
    // 
    




  }

  const submitt=(event)=>{
    event.preventDefault();
    if(todo.length>0){
      dispatch({
        type:"ADD_TODO",
        payload:todo
      })
      settodo('') 
    }else{
      seterror(true)
    }
 

  }

  const dispatch=useDispatch()



  return (
    <>
      <form className="form-inline" onSubmit={submitt}>
  <div className="form-group mb-2">
    
    <input type="text"  
    className="form-control-plaintext"
     placeholder='enter todos' 

     onChange={changeInput}
     value={todo}

     
     />{
      error &&  <p className='text-danger'>some error</p>
     }
  
  </div>

  <button type="submit" className="btn btn-primary mb-2">Add ToDo</button>
</form>
    </>
  
  )
}
