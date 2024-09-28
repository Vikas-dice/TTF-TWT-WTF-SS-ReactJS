const initialState={
    todos:["breakfast","lunch","dinner"]
}

const todoReducer=(state=initialState,action)=>{

    console.log(action);

    switch(action.type){
        case "ADD_TODO":
            return{
                ...state,
                todos:[...state.todos,action.payload]

            }

        case "DELETE_TODO":
            let filtereddata=state.todos.filter((todo)=>todo!==action.payload)

            console.log(filtereddata);
            
            return{
                ...state,
                todos:filtereddata
            
            }
    }
    

    return state;
}

export default todoReducer;
