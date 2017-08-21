import { SEARCH_GITHUB_USERS, RECEIVED_GITHUB_USERS, NO_USER_FOUND_ERROR } from '../actionTypes';
const initialState = {
    user: undefined,
    error: undefined
};
const github = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVED_GITHUB_USERS:
            return {
                ...state,
                user: action.payload.user,
                error: null
            };
        case NO_USER_FOUND_ERROR:
            state = null;
            return {
                ...state,
                user: null,
                error: action.payload.error
            };
            break;
        default:
            return state;
            break;
    }
    return state;
};

export default github;