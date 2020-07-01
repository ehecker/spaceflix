import { SET_ACTIVE_PROFILE } from "../actions/profile_actions";

const activeProfileReducer = (oldState = {}, action) => {
    
    switch(action.type) {
        case SET_ACTIVE_PROFILE:
            return Object.assign({}, {profile: action.profile});
        default: 
            return oldState;
    }
}

export default activeProfileReducer;