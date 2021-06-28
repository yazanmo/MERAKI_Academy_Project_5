import { createStore, combineReducers } from "redux";

import login from "./login";
import review from "./review";

const reducers = combineReducers({ login, review });
const store = createStore(reducers);
export default store;
