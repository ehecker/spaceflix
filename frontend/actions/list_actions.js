import * as ListAPIUtil from "../util/list_api_util";

// Action Constants
export const CREATE_LIST = "CREATE_LIST";

// Action Creators
const createListAction = profileId =>({
    type: CREATE_LIST,
    profileId
})

// Thunk Action Creators
export const createList = profileId => dispatch => ListAPIUtil.createList(profileId)
    .then(list => dispatch(createListAction(list)))