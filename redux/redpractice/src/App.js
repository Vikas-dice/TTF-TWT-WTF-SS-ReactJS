import React from 'react'
import Comp from './comp'
import { useDispatch } from 'react-redux'
const App = () => {
  const dispatch=useDispatch();
  return (
   <>
   <button onClick={()=> dispatch({type:'INC'})}>increment</button>

  <Comp/>
   <button onClick={()=> dispatch({type:'DEC'})}>decrement</button>
   </>
  )
}

export default App