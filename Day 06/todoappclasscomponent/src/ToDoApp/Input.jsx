import React, { Component } from 'react'

export default class Input extends Component {

    constructor(){
        super()

        this.state={
            todo:'',
            error:false
        }
    }

    changeinput=(event)=>{

        console.log("change input fired ");
        console.log(event.target.value);

        this.setState({
            todo:this.event.target.value
        })

        this.setState({
            error:true
        })
        
        
    }
    onsubmitt=()=>{
        


    }

  render() {
    return (
      <div>
               <form className="row mt-4" onsubmit={this.onsubmitt}>
  <div className="col-10">
   
    <input type="text" 
     className="form-control"
      placeholder="Enter todos to continue"
      value={this.todo}

      onChange={this.changeinput}
      
      />
       <p className='text-danger'>enter todo : error</p>
  </div>

 

 
  <div className="col-2">
    <button type="submit" className="btn btn-primary mb-3">Add ToDo</button>
 
 
  </div>
</form>




      </div>
    )
  }
}
