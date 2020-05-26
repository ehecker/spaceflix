import * as ProfileAPIUtil from "../util/profiles_api_util";

// Action Constants
export const CREATE_PROFILE = "CREATE_PROFILE";

// Action Creators
const createProfileAction = profileData => {
    return {
        type: CREATE_PROFILE,
        profileData
    }
}

// Thunk Action Creators
export const createProfile = profile => dispatch => ProfileAPIUtil.createProfile(profile)
    .then(profile => dispatch(createProfileAction(profile)), err => console.log(err))