import React,{createContext} from 'react'
import Page from './pages/page'

const fname=createContext();
const lname=createContext();
const App = () => {
  return (
    <>
 <fname.Provider value={"shubham"}>
  <Page/>
  </fname.Provider>
  </>
  )
}

export default App

export {fname,lname}
