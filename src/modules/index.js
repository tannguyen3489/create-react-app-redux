import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import postlist from './postlist';
import commentlist from './commentlist';

export default combineReducers({
    router: routerReducer,
    counter,
    postlist,
    commentlist
});
