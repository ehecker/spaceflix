import { createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";
import thunk from "../middleware/thunk_middleware";


const configureStore = (preloadedState = {}) => {
    // return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

export default configureStore;