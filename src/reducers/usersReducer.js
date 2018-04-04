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
        case actionTypes.ADD_USER_ATTEMPTED:
            return state;
        case actionTypes.ADD_USER_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_USER_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    users:state.users.concat([action.data])
                }
            );
        case actionTypes.DELETE_USER_ATTEMPTED:
            return state;
        case actionTypes.DELETE_USER_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_USER_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    users: action.data
                }
            );
        default:
            return state;
    }
}