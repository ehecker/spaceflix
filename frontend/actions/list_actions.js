import * as ListAPIUtil from "../util/list_api_util";

// Action Constants
export const CREATE_LIST = "CREATE_LIST";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";

// Action Creators
const createListAction = list => ({
    type: CREATE_LIST,
    list
});

const addMovieAction = listItemInfo => ({
    type: ADD_MOVIE_TO_LIST,
    listItemInfo 
});


// Thunk Action Creators
export const createList = profileId => dispatch => ListAPIUtil.createList(profileId)
    .then(list => dispatch(createListAction(list)))

export const addMovieToList = listItemInfo => dispatch => ListAPIUtil.addMovieToList(listItemInfo)
    .then(listItem => dispatch(addMovieAction(listItem)))