import React, { useContext } from 'react'
import { fname,lname } from '../App'
const Comp2 = () => {
 const myname= useContext(fname);
  return (
    <>
  <h1> my name is {myname}</h1>
    </>
  )
}

export default Comp2