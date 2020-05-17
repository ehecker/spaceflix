import { RECEIVE_GENRES } from "../actions/genre_actions";

const genresReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_GENRES:
            return Object.assign({}, action.genres)
        default:
            return oldState;
    }
}

export default genresReducer;