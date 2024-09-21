
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import store from './Redux/store/store';

function App() {
  const counter=useSelector((store)=>store.counter)
  console.log(counter);

  const dispatch=useDispatch()

  const increment=()=>{
    dispatch({
      type:"INCREMENT",
      payload:0
    })

  }

  const decrement=()=>{
    dispatch({
      type:"DECREMENT",
      payload:0
    })
  }
 

  
  


  return (
    <div className="App">
   <p>Counter : {counter}</p>
   <button onClick={increment}>Incremenr</button>
   <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
