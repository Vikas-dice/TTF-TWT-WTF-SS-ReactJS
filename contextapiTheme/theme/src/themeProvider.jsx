import React, { createContext, useState } from 'react'
const themeContext=createContext();
const ThemeProvider = ({children}) => {
//renders the children components
  const [theme,setTheme]=useState("light");
// create to do use state here
  const toggle = () => {
    setTheme((prev) => prev === 'light' ? 'dark' : 'light');
  };
//create functions add to do, remove to do
//in provider send values todo, addtodo, removetodo
  return (
    <>
    <themeContext.Provider value={{theme,toggle}}>  
      <h1>header</h1>
    {children}
    <h1>footer</h1>
     </themeContext.Provider>
     </>
  )
}

export {ThemeProvider,themeContext}