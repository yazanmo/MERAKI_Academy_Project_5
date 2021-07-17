import { createStore, combineReducers } from "redux";
import login from "./login";
import storiesReducer from "./story";
import review from "./review";
import doctorProfile from "./doctorProfile"

const reducers = combineReducers({ login, storiesReducer, review ,doctorProfile});
const store = createStore(reducers);

export default store;
