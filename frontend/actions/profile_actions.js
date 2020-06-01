import * as ProfileAPIUtil from "../util/profiles_api_util";

// Action Constants
export const CREATE_PROFILE = "CREATE_PROFILE";
export const RECEIVE_USER_PROFILES = "RECEIVE_USER_PROFILES";
export const DELETE_PROFILE = "DELETE PROFILE"

// Action Creators
const createProfileAction = profileData => {
    return {
        type: CREATE_PROFILE,
        profileData
    }
}

const receiveUserProfiles = user => {
    return {
        type: RECEIVE_USER_PROFILES,
        profiles: user.profiles
    }
}

const deleteProfileAction = profileId => {
    return {
        type: DELETE_PROFILE,
        profileId
    }
}

// Thunk Action Creators
export const createProfile = profile => dispatch => ProfileAPIUtil.createProfile(profile)
    .then(profile => dispatch(createProfileAction(profile)), err => console.log(err))

export const getUserProfiles = id => dispatch => ProfileAPIUtil.fetchUserProfiles(id)
    .then(profiles => dispatch(receiveUserProfiles(profiles)), err => console.log(err))

export const deleteProfile = profileId => dispatch => ProfileAPIUtil.deleteUserProfile(profileId)
    .then(() => dispatch(deleteProfileAction(profileId)))