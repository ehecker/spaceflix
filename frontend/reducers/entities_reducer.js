import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import genresReducer from "./genres_reducer";
import profilesReducer from "./profiles_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    genres: genresReducer,
    profiles: profilesReducer
});

export default entitiesReducer;