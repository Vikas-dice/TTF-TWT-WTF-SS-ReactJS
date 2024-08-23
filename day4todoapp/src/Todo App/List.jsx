import React from 'react'

export default function (props) {
    console.log("props data coming from app component",props);
    
  return (
    <div>
        <ul className="list-group mx-5">

            {
                props.todos.length>0?props.todos.map((item,index)=>{
                 return   <li className="list-group-item" key={index} >{item}</li>

                }) :<li className="list-group-item">No Todo</li>

            }

</ul>
    </div>
  )
}
