import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Input() {

    let dispatch=useDispatch()
    let[todo,settodo]=useState("")
   let[error,seterror]= useState(true)
    console.log(todo);
    

    const changeInput=(event)=>{
        console.log("i am fired ");
        console.log(event.target.value);

        if(event.target.value.length>0){
            settodo(event.target.value)
            seterror(false)

        }else{
            seterror(true)
        }
        
        
        

    }

    const submitt=(event)=>{
        event.preventDefault();

        dispatch({
            type:"ADD_TODO",
            payload:todo
        })

        settodo('')
        seterror(true)

        


    }
  return (

    <form className="row mx-2" onSubmit={submitt}>
    <div className="col-10 mt-3 ">
      <input type="text"  
      class="form-control"   
       placeholder="email@example.com"
       onChange={changeInput}
       value={todo}
       
       
       />
       {
        error && <p className='txt-danger'>add todos to continue</p>

       }
       
    </div>
   
    <div className="col-2 mt-3">
      <button type="submit" 
      className="btn btn-primary mb-3"
     

      >ADD</button>
    </div>
  </form>
    
  )
}
