import { CREATE_LIST } from "../actions/list_actions";

const listsReducer = (oldState = {}, action) => {
    switch (action.type) {
        case CREATE_LIST:
            return Object.assign({}, oldState, { list: action.profileId})
        default:
            return oldState;
    }
}

export default listsReducer;