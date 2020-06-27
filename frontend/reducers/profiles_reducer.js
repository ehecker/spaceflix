import { CREATE_PROFILE, RECEIVE_USER_PROFILES, DELETE_PROFILE } from "../actions/profile_actions";

const profilesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case CREATE_PROFILE:
            return Object.assign({}, action.updatedProfiles.userProfiles);
        case RECEIVE_USER_PROFILES:
            return Object.assign({}, action.profiles);
        case DELETE_PROFILE:
            // let nextState = Object.assign({}, oldState);
            // delete nextState[action.profileId];
            // return nextState;
            return Object.assign({}, action.updatedProfiles.userProfiles);
        default:
            return oldState;
    }
}

export default profilesReducer;