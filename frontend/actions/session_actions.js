import * as SessionAPIUtil from "../util/session_api_util";

// Action Constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

// Action Creators
const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

const clearErrs = () => {
    return {
        type: CLEAR_ERRORS
    }
}

// Thunk Action Creators
export const login = user => dispatch => SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))

export const logout = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()), err => dispatch(receiveErrors(err.responseJSON)))

export const signup = user => dispatch => SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)), err => dispatch(receiveErrors(err.responseJSON)))

export const clearErrors = () => dispatch => dispatch(clearErrs());