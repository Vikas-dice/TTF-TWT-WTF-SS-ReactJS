/*

store 
reducer 
store-reducer 



*/

const { createStore } = require("redux");

//reducer

const somereducer =(state=100,action)=>{
    // console.log(action);
    

    if(action.type=="INCREMENT"){
        return  state+1;
        
    }

    if(action.type=="DECREMENT"){
        return state-1;
    }
    return state;

}

let store=createStore(somereducer)


store.subscribe(()=>{
    console.log(store.getState());
    
})

// console.log(store.getState());

// console.log(store);
//kuch action generate hua 
store.dispatch(
    {
        type:"INCREMENT",
        payload:0
    }
)

store.dispatch({
    type:"DECREMENT",
 
})










