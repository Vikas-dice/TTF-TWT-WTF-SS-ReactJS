

import React, { Component } from 'react'

export default class Classcomp2 extends Component {
    constructor(){
        super()

        this.state={
            counter:10
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

        <p>counter :{this.state.counter}</p>
        <button onClick={()=>this.increment()}>inc</button>
        <button onClick={()=>this.decrement()}>dec</button>
      </div>
    )
  }
}
