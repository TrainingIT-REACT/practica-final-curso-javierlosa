import { createStore, combineReducers } from "redux";

// 4.3 Reducers
import albumHistory from './reducers/albumHistory';
import songHistory from './reducers/songHistory';
import login from './reducers/login';

// 4.2 Store
export default createStore(combineReducers({ albumHistory, songHistory, login }));
