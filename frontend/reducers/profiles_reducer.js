import { CREATE_PROFILE } from "../actions/profile_actions";

const profilesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CREATE_PROFILE:
            return Object.assign(oldState, action.profileData)
        default:
            return oldState;
    }
}

export default profilesReducer;