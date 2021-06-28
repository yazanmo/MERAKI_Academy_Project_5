import { createStore, combineReducers } from 'redux';

import login from './login';
import storiesReducer from './story'
 
const reducers=combineReducers({login,storiesReducer});
 const store = createStore(reducers);
export default store;