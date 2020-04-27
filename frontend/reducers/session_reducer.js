import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

// Why is the oldState default necessary here? oldState = {id: null}
// "Your sessionReducer should maintain its own default state. To do that pass in an object as a default argument to sessionReducer with id set to null."

const sessionReducer = (oldState = {id: null}, action) => {
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id})
        case LOGOUT_CURRENT_USER:
            return {id: null}
        default:
            return oldState;
    }
}

export default sessionReducer;