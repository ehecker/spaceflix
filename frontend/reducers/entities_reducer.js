import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import genresReducer from "./genres_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    genres: genresReducer
});

export default entitiesReducer;