

import React, { Component } from 'react'

export default class Classcomp extends Component {
    constructor(){

        
        super()

        console.log("m step 1 - cons chal gya ");

        this.state={
            counter:0
        }

        this.increment=()=>{
            this.setState({
                counter:this.state.counter+1
            })
        }

        this.decrement=()=>{
            this.setState({
                counter:this.state.counter-1

            })
           
        }
        
    }

    componentDidMount(){
        console.log("step 2 - component did mount chal gya ");
        
    }
    componentWillUnmount(){
        console.log("step 3- comp will unmount ");
        
    }

    shouldComponentUpdate(){
        console.log("step 4 - should comp update chalega ");
        
    }

    getSnapshotBeforeUpdate(prev,next){
        console.log("step 5- snap shot for memorization");
        
        // console.log(prev,next);
        console.log(prev,next);
        

        
    }


    componentDidUpdate(){
        console.log("step 6 - comp did update");
        
    }
  render() {
    return (
      <div>

        <p>counter :{this.state.counter}</p>
        <button onClick={this.increment}>inc</button>
        <button onClick={this.decrement}>dec</button>
      </div>
    )
  }
}
