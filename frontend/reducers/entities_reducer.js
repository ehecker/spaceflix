import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import genresReducer from "./genres_reducer";
import profilesReducer from "./profiles_reducer";
import activeProfileReducer from "./active_profile_reducer";
import listsReducer from "./lists_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    genres: genresReducer,
    profiles: profilesReducer,
    activeProfile: activeProfileReducer,
    list: listsReducer
});

export default entitiesReducer;