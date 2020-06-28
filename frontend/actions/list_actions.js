import * as ListAPIUtil from "../util/list_api_util";

// Action Constants
export const CREATE_LIST = "CREATE_LIST";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const REMOVE_MOVIE_FROM_LIST = "REMOVE_MOVIE_FROM_LIST";
export const RECEIVE_PROFILE_LIST = "RECEIVE_PROFILE_LIST";

// Action Creators
const createListAction = updatedUser => ({
    type: CREATE_LIST,
    updatedProfiles: updatedUser.profiles
});

const addMovieAction = updatedList => ({
    type: ADD_MOVIE_TO_LIST,
    updatedList 
});


const removeMovieAction = updatedList => ({
    type: REMOVE_MOVIE_FROM_LIST,
    updatedList
})

const getListAction = list => {
    return {
        type: RECEIVE_PROFILE_LIST,
        list
    }
}

// Thunk Action Creators
export const createList = profileId => dispatch => ListAPIUtil.createList(profileId)
    .then(list => dispatch(createListAction(list)))

export const addMovieToList = listItemInfo => dispatch => ListAPIUtil.addMovieToList(listItemInfo)
    .then(listItem => dispatch(addMovieAction(listItem)))

export const removeMovieFromList = movieId => dispatch => ListAPIUtil.removeMovieFromList(movieId)
    .then(movieId => dispatch(removeMovieAction(movieId)))

export const getProfileList = listId => dispatch => ListAPIUtil.fetchList(listId)
    .then(list => {
        return dispatch(getListAction(list))
    })
    