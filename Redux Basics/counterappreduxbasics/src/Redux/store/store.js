import { createStore } from "redux";
import counterReducer from "../reducer/counter.reducer";


let store=createStore(counterReducer)

export default store;