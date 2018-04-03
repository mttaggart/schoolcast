import actionTypes from "../actions/users/actionTypes";

export default function users(
    state={
        users: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_USERS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_USERS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_USERS_SUCCEEDED:
            return Object.assign({}, state, {users: action.data});
        default:
            return state;
    }
}