

const initialState={
    counter:10
}

 const counterReducer=(state=initialState,action)=>{
    console.log("coming action from ui ",action);

    switch(action.type){
        case "INCREMENT":
                return {
                    
                    counter : state.counter+1
                }
        case "DECREMENT":
                return {   
                   counter: state.counter-1
                }
    }
    
    


    return state;
}

export default counterReducer;