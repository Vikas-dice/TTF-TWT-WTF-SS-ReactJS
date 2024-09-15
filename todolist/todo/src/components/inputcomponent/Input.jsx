import React, { useContext, useState } from 'react'
import { taskcontext } from '../../TodoContext';

const Input = () => {
    const {addtodo}=useContext(taskcontext)
    const [currTask,setCurrTask]=useState("");
  return (
    <div>
<input type="text" value={currTask} onChange={(e)=> setCurrTask(e.target.value)}/>

<button onClick={()=>{addtodo(currTask); setCurrTask("")}}>ADD TASK</button>

    </div>
  )
}

export default Input