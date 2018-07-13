import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import postlist from './postlist';

export default combineReducers({
    router: routerReducer,
    counter,
    postlist
});
