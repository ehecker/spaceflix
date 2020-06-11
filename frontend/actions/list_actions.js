import * as ListAPIUtil from "../util/list_api_util";

// Action Constants
export const CREATE_LIST = "CREATE_LIST";

// Action Creators
const createListAction = list => ({
    type: CREATE_LIST,
    list
})

// Thunk Action Creators
export const createList = profileId => dispatch => ListAPIUtil.createList(profileId)
    .then(list => dispatch(createListAction(list)))