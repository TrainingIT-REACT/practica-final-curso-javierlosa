import { createStore, combineReducers, applyMiddleware } from "redux";
import promise from 'redux-promise-middleware';

// 4.3 Reducers
import albumHistory from './reducers/albumHistory';
import songHistory from './reducers/songHistory';
import login from './reducers/login';
import albums from './reducers/albums';

// 4.5 Middlewares
import logger from './middlewares/logger';

// 4.2 Store
// Para usar el middleware de logger cambiar promise() por logger
//export default createStore(combineReducers({ albums, albumHistory, songHistory, login }), applyMiddleware(promise()));
export default createStore(combineReducers({ albumHistory, songHistory, login }), applyMiddleware(promise()));
