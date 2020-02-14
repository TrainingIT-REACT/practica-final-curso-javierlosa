import { createStore, combineReducers } from "redux";

// Reducers
import todos from './reducers/songHistory';
import user from './reducers/user';

export default createStore(combineReducers({ todos, user }));
