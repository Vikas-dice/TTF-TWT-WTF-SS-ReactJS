import React, { useContext, useState } from 'react';
import { taskcontext } from '../../TodoContext';

const List = () => {
  const [editId, setEditId] = useState(null);
  const [newtask, setnewtask] = useState("");
  const { todo, removeTodo, updatetodo } = useContext(taskcontext);
 const editClick=(index)=>{

  setEditId(index);
 }
  
  return (
    <ul>
      {todo.map((task, index) => (
        <li key={index}>
          {editId === index ? (
            <>
           <input type="text" value={newtask} onChange={(e)=>{setnewtask(e.target.value)}}/>
              <button onClick={() => {updatetodo(index, newtask);setEditId(null)}}>update</button>
             
            </>
          ) : (
            <>
              <span>{task}</span>
              <button onClick={() => {  setnewtask(task);editClick(index)}}>edit</button>
              <button onClick={() => removeTodo(index)}>done</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default List;
