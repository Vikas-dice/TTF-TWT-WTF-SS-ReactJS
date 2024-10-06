import React from 'react'
import { useSelector } from 'react-redux'
import store from '../Redux/Store/store';



export default function List() {
  let todos=useSelector((store)=>store.todos)
  console.log (todos);
  


  return (
    <div>

<ul class="list-group">

  {
    todos.length>0?todos.map((todo,index)=>{
      return (
        <li class="list-group-item">{todo}</li>



      )

    }) : <li class="list-group-item">No TODO</li>
  }




</ul>
    </div>
  )
}
