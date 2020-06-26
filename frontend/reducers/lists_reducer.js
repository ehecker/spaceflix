import { CREATE_LIST, RECEIVE_PROFILE_LIST, ADD_MOVIE_TO_LIST, REMOVE_MOVIE_FROM_LIST } from "../actions/list_actions";

const listsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CREATE_LIST:
            return oldState;
        case RECEIVE_PROFILE_LIST:
            return Object.assign({}, action.list)
        case ADD_MOVIE_TO_LIST:
            return Object.assign({}, action.updatedList)
        case REMOVE_MOVIE_FROM_LIST:
            return Object.assign({}, action.updatedList)
        default:
            return oldState;
    }
}

export default listsReducer;