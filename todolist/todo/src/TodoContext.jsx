import React, { createContext, useState } from 'react'

const taskcontext=createContext();
const Todoprovider = ({children}) => {
    const [todo, setTodo]=useState(["task1","task2"]);
    const addtodo=(task)=>{
      setTodo([...todo,task])
    }
    const removetodo=(index)=>{
        const newtodo=[...todo];
        newtodo.splice(index,1);
        setTodo(newtodo)
    }
     
  const updatetodo=(index,updatedTask)=>{
    const newtodo=[...todo];
    newtodo[index]=updatedTask;
    setTodo(newtodo)
  }
  return (
    <taskcontext.Provider value={{todo,addtodo,removetodo, updatetodo}}>
    {children}
    </taskcontext.Provider>
  )
}

export {Todoprovider,taskcontext}

