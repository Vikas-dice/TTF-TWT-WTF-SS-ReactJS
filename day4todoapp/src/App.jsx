import { useState } from "react";
import Input from "./Todo App/input";
import List from "./Todo App/List";

function App() {
  const [todos,settodos]=useState(["breakfast","lunch","dinner","kuchh bhi"])
  const[edittodos,setedittodos]= useState({
    index:'',
    data:''
   })


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
    setedittodos({
      index,
    value
    })
    
  }

  const updatetodo=(index,data)=>{
    console.log(index,data);
    todos.splice(index,1,data)

    settodos([...todos])
    setedittodos({
      index:'',
      data:''
    })
    

  }
  // const addtodo=(value)=>{
  //   console.log(value);
  //   // todos.push(value)
  //   // settodos(...todos)
  //   settodos([...todos,value])
    
  // }

  return (
    <div className="App">
   <Input addtodo={addtodo} />
   <List todos={todos} deletetodo={deletetodo} edittodo={edittodo} updatetodos={updatetodos}/>
    </div>
  );
}

export default App;
