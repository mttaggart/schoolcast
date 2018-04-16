import actionTypes from "../actions/portals/actionTypes";

export default function portals(
    state={
        portals: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_PORTALS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_PORTALS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_PORTALS_SUCCEEDED:
            return Object.assign({}, state, {portals: action.data});
        case actionTypes.ADD_PORTAL_ATTEMPTED:
            return state;
        case actionTypes.ADD_PORTAL_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_PORTAL_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portals: action.data
                }
            );
        case actionTypes.UPDATE_PORTAL_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_PORTAL_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_PORTAL_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portals: action.data
                }
            );
        case actionTypes.DELETE_PORTAL_ATTEMPTED:
            return state;
        case actionTypes.DELETE_PORTAL_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_PORTAL_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portals: action.data
                }
            );
        default:
            return state;
    }
}