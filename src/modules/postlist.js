import axios from 'axios';

export const LOAD_DATA = 'postlist/LOAD_DATA';
const initialState = {
    postList: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                postList: action.payload
            };
        default:
            return state;
    }
};
export const loadPostListData = () => {
    return dispatch => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return dispatch({
                    type: LOAD_DATA,
                    payload: response.data
                });
            });
    };
};
