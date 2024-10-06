
const initialState={
    todos:["breakfast","lunch","dinner","BRUNCH"]
}


const TodoReducer=(state=initialState,action)=>{
    console.log("coming action ",action);

    switch(action.type){
        case "ADD_TODO":
          return  {
            ...state,
                todos:[...state.todos,action.payload]
            }



        default:
            return state;


          
    }
    


 



}

export default TodoReducer;