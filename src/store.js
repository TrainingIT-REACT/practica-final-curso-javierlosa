import { createStore, combineReducers, applyMiddleware } from "redux";

// 4.3 Reducers
import albumHistory from './reducers/albumHistory';
import songHistory from './reducers/songHistory';
import login from './reducers/login';

// 4.5 Middlewares
import logger from './middlewares/logger';

// 4.2 Store
export default createStore(combineReducers({ albumHistory, songHistory, login }, applyMiddleware(logger)));
