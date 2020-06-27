import * as ProfileAPIUtil from "../util/profiles_api_util";

// Action Constants
export const CREATE_PROFILE = "CREATE_PROFILE";
export const RECEIVE_USER_PROFILES = "RECEIVE_USER_PROFILES";
export const DELETE_PROFILE = "DELETE PROFILE"
export const SET_ACTIVE_PROFILE = "SET_ACTIVE_PROFILE";

// Action Creators
const createProfileAction = updatedProfiles => {
    return {
        type: CREATE_PROFILE,
        updatedProfiles
    }
}

const receiveUserProfiles = user => {
    return {
        type: RECEIVE_USER_PROFILES,
        profiles: user.profiles
    }
}

const deleteProfileAction = updatedProfiles => {
    return {
        type: DELETE_PROFILE,
        updatedProfiles
    }
}

const activeProfileAction = profile => {
    return {
        type: SET_ACTIVE_PROFILE,
        profile
    }
}

// Thunk Action Creators
export const createProfile = profile => dispatch => ProfileAPIUtil.createProfile(profile)
    .then(updatedProfiles => dispatch(createProfileAction(updatedProfiles)))

export const getUserProfiles = id => dispatch => ProfileAPIUtil.fetchUserProfiles(id)
    .then(profiles => dispatch(receiveUserProfiles(profiles)))

export const deleteProfile = profileId => dispatch => ProfileAPIUtil.deleteUserProfile(profileId)
    .then(updatedProfiles => dispatch(deleteProfileAction(updatedProfiles)))

export const setActiveProfile = profile => dispatch => dispatch(activeProfileAction(profile))