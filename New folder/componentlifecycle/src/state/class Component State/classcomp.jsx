


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
        // counter++;
        // console.log("inc fired");
        
        // console.log(counter);
        
    }
    decrement=()=>{
        this.setState({

            counter:this.state.counter-1
        })
        // console.log("dec fired");
        
        // counter--;
        // console.log(counter);
        
    }





  render() {


    return (
      <div>


        <p>counter: {this.state.counter}</p>
        <button onClick={()=>this.increment()}>increment</button>
        <button onClick={()=>this.decrement()}>decrement</button>
      </div>
    )
  }
}
