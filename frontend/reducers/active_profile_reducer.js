import { SET_ACTIVE_PROFILE } from "../actions/profile_actions";

const activeProfileReducer = (oldState = {}, action) => {
    
    // debugger

    switch(action.type) {
        case SET_ACTIVE_PROFILE:
            return Object.assign({}, oldState, {id: action.profileId});
        default: 
            return oldState;
    }
}

export default activeProfileReducer;