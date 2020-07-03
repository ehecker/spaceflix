import * as GenresAPIUtil from "../util/genres_api_util";

// Action Constants
export const RECEIVE_GENRES = "RECEIVE_GENRES";

// Action Creators
const receiveGenres = genres => ({
        type: RECEIVE_GENRES,
        genres
})

// Thunk Action Creators
export const getGenres = () => dispatch => GenresAPIUtil.fetchGenres()
    .then(genres => dispatch(receiveGenres(genres)))