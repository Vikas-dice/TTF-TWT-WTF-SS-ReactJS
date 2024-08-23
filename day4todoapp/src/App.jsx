import { useState } from "react";
import Input from "./Todo App/input";
import List from "./Todo App/List";

function App() {
  const [todos,settodos]=useState(["breakfast","lunch","dinner","kuchh bhi"])


  const addtodo=(value)=>{
    console.log("coming value",value);

    settodos([...todos,value])

    
    
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
   <List todos={todos}/>
    </div>
  );
}

export default App;
