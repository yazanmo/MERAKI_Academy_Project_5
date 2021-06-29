import { createStore, combineReducers } from "redux";
import login from './login';
import storiesReducer from './story'
 import review from "./review";


const reducers=combineReducers({login,storiesReducer,review});
 const store = createStore(reducers);
export default store;
