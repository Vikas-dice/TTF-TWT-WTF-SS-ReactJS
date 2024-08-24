import { useState } from "react";
import Input from "./Todo App/input";
import List from "./Todo App/List";

function App() {
  const [todos,settodos]=useState(["breakfast","lunch","dinner","kuchh bhi"])


  const addtodo=(value)=>{
    console.log("coming value",value);

    settodos([...todos,value])

    
    
  }

  const deletetodo=(value)=>{
    console.log(value);
    
    console.log("delete todo fired ");

    const filtertodos=todos.filter((todo)=>todo !==value);
    console.log(filtertodos);
    settodos(filtertodos)
    

    // todos.splice(index,2)

    // settodos([...todos])
    
  }

  const edittodo=(value,index)=>{
    console.log(value,index);
    
    console.log("edit todo fired ");
    
  }
  // const addtodo=(value)=>{
  //   console.log(value);
  //   // todos.push(value)
  //   // settodos(...todos)
  //   settodos([...todos,value])
    
  // }

  return (
    <div className="App">
   <Input addtodo={addtodo}/>
   <List todos={todos} deletetodo={deletetodo} edittodo={edittodo}/>
    </div>
  );
}

export default App;
