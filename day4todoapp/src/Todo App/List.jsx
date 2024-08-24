import React from 'react'

export default function (props) {
    console.log("props data coming from app component",props);
    
  return (
    <div>
        <ul className="list-group mx-5">

            {
                props.todos.length>0?props.todos.map((item,index)=>{
                 return   <li className="list-group-item d-flex justify-content-between" key={index} >
                  <div> {item}</div>
                  <div className=''>
                    <button 
                    className='btn-danger'
                    onClick={()=>props.deletetodo(item)}
                    
                    >Delete</button>
                   
                    <button className='btn-warning mx-3'
                    onClick={()=>props.edittodo(item,index)}
                    
                    
                    >Edit</button>
                  
                
                  </div>
                 
                  
                  </li>

                }) :<li className="list-group-item">No Todo</li>

            }

</ul>
    </div>
  )
}
