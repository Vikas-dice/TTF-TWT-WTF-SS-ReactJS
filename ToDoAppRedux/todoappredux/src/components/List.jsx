import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function List() {
  let todos=useSelector((state)=>state.todos)
//   console.log(todos);
let dispatch=useDispatch()

const deletetodo=(todo)=>{
    console.log("i am fired ");
    console.log(todo);
    

    dispatch({
        type:"DELETE_TODO",
        payload:todo
    })

   
    
}
  

  
    
  return (

    <ul className="list-group mx-4">

        {
            todos.length>0?todos.map((value,index)=>{
                return  <li className="list-group-item d-flex justify-content-between">{value}

<button className='btn btn-danger ' onClick={()=>deletetodo(value)}>delete</button>
                
                </li>

                
            }) :<li className="list-group-item">No TODO</li>
            
            
        }
 
 
  
</ul>
   
  )
}
