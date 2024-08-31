import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {

    constructor(){
        super()


    this.state={
        todos:["breakfast","lunch","dinner","brunch"],
      
    }
    }

    addtodo=(value)=>{
        this.setState({
            todos:[...this.state.todos,value]
        })

    }
  render() {
    return (

        <>
          <div>todo app using class component </div>
          <Input addtodo={this.addtodo}/>

          <List todos={this.state.todos}/>


   

        
        
        </>
    


    )
  }
}
