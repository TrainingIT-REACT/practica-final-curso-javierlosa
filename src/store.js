import { createStore, combineReducers } from "redux";

// 4.3 Reducers
import albumHistory from './reducers/albumHistory';
import songHistory from './reducers/songHistory';
import user from './reducers/user';

// 4.2 Store
export default createStore(combineReducers({ albumHistory, songHistory, user }));
