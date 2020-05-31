import { CREATE_PROFILE, RECEIVE_USER_PROFILES } from "../actions/profile_actions";

const profilesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CREATE_PROFILE:
            return Object.assign(oldState, action.profileData);
        case RECEIVE_USER_PROFILES:
            return Object.assign({}, oldState, action.profiles);
        default:
            return oldState;
    }
}

export default profilesReducer;