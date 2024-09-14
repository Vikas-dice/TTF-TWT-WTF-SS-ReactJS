import React, { useContext } from 'react'
import { fname,lname } from '../App'
import Comp2 from './childcomponent2';
const Comp = () => {
 const myname= useContext(fname);
  return (
    <>
  <Comp2/>
    </>
  )
}

export default Comp