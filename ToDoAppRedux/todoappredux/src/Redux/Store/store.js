import { createStore } from "redux";
import todoReducer from "../Reducer/todo.reducer";

let store=createStore(todoReducer)

export default store;