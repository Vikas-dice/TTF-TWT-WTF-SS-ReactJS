import { createStore } from "redux";
import TodoReducer from "./Reducer/todo.reducer";


let store=createStore(TodoReducer)

export default store;