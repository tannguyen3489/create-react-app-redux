import axios from 'axios';

export const LOAD_DATA = 'commentlist/LOAD_DATA';
const initialState = {
    commentList: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DATA:
            return {
                ...state,
                commentList: action.payload
            };
        default:
            return state;
    }
};
export const loadComments = postId => {
    return dispatch => {
        console.info('loadComments', postId);
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
            )
            .then(response => {
                return dispatch({
                    type: LOAD_DATA,
                    payload: response.data
                });
            });
    };
};
