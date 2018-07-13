import axios from 'axios';

export const LOAD_DATA = 'postlist/LOAD_DATA';
const initialState = {
    postList: [
        {
            userId: 1,
            id: 1,
            title:
                'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body:
                'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
    ]
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
