import actionTypes from "../actions/transitionTypes/actionTypes";

export default function transitionTypes(
    state={
        transitionTypes: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_TRANSITIONTYPES_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_TRANSITIONTYPES_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_TRANSITIONTYPES_SUCCEEDED:
            return Object.assign({}, state, {transitionTypes: action.data});
        case actionTypes.ADD_TRANSITIONTYPE_ATTEMPTED:
            return state;
        case actionTypes.ADD_TRANSITIONTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_TRANSITIONTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    transitionTypes: action.data
                }
            );
        case actionTypes.UPDATE_TRANSITIONTYPE_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_TRANSITIONTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_TRANSITIONTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    transitionTypes: action.data
                }
            );
        case actionTypes.DELETE_TRANSITIONTYPE_ATTEMPTED:
            return state;
        case actionTypes.DELETE_TRANSITIONTYPE_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_TRANSITIONTYPE_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    transitionTypes: action.data
                }
            );
        default:
            return state;
    }
}