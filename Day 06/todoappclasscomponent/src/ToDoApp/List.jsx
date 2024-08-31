import React, { Component } from 'react'

export default class List extends Component {
    constructor(props){
        console.log("coming props ",props);
        
        super(props)


    }
  render() {
    return (
      <div>

    

   

        
<ul className="list-group">

{
        this.props.todos.length>0 ?this.props.todos.map((item,index)=>{
            return  <li className="list-group-item">{item}</li>
        }) :  <li className="list-group-item">No ToDo</li>
      }



</ul>



      </div>
    )
  }
}
