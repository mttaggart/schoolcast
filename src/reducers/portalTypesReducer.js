import actionTypes from "../actions/portalTypes/actionTypes";

export default function portalTypes(
    state={
        portalTypes: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_PORTALTYPES_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_PORTALTYPES_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_PORTALTYPES_SUCCEEDED:
            return Object.assign({}, state, {portalTypes: action.data});
        case actionTypes.ADD_PORTALTYPE_ATTEMPTED:
            return state;
        case actionTypes.ADD_PORTALTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_PORTALTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portalTypes: action.data
                }
            );
        case actionTypes.UPDATE_PORTALTYPE_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_PORTALTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_PORTALTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portalTypes: action.data
                }
            );
        case actionTypes.DELETE_PORTALTYPE_ATTEMPTED:
            return state;
        case actionTypes.DELETE_PORTALTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_PORTALTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    portalTypes: action.data
                }
            );
        default:
            return state;
    }
}