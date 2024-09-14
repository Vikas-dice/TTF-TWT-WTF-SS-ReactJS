import React, { useContext } from 'react'
import { taskcontext } from '../../TodoContext'

const List = () => {
    const {todo,removetodo}=useContext(taskcontext);
  return (
  <ul>
    {
        
        todo.map((task,index)=>(
            <li key={index}>{task}  
            <button onClick={()=>removetodo(index)}>done</button>
                </li>
        ))
    }
  </ul>
  )
}

export default List