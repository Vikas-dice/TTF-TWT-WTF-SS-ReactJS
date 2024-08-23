


import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(){
        super()


        this.state={
            counter:0
        }
    }
    increment=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    decrement=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }





  render() {
    return (
      <div>
        <p>counter : {this.state.counter}</p>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>



      </div>
    )
  }
}
