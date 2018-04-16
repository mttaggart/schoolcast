import actionTypes from "../actions/displays/actionTypes";

export default function displays(
    state={
        displays: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_DISPLAYS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_DISPLAYS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_DISPLAYS_SUCCEEDED:
            return Object.assign({}, state, {displays: action.data});
        case actionTypes.ADD_DISPLAY_ATTEMPTED:
            return state;
        case actionTypes.ADD_DISPLAY_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_DISPLAY_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    displays:action.data
                }
            );
        case actionTypes.UPDATE_DISPLAY_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_DISPLAY_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_DISPLAY_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    displays: action.data
                }
            );
        case actionTypes.DELETE_DISPLAY_ATTEMPTED:
            return state;
        case actionTypes.DELETE_DISPLAY_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_DISPLAY_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    displays: action.data
                }
            );
        default:
            return state;
    }
}