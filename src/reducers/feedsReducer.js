import actionTypes from "../actions/feeds/actionTypes";

export default function feeds(
    state={
        feeds: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_FEEDS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_FEEDS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_FEEDS_SUCCEEDED:
            return Object.assign({}, state, {feeds: action.data});
        case actionTypes.GET_FEEDITEMS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_FEEDITEMS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_FEEDITEMS_SUCCEEDED:
            return Object.assign({}, state, {feedItems: action.data});
        case actionTypes.ADD_FEED_ATTEMPTED:
            return state;
        case actionTypes.ADD_FEED_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_FEED_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    feeds: action.data
                }
            );
        case actionTypes.UPDATE_FEED_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_FEED_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_FEED_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    feeds: action.data
                }
            );
        case actionTypes.DELETE_FEED_ATTEMPTED:
            return state;
        case actionTypes.DELETE_FEED_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_FEED_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    feeds: action.data
                }
            );
        default:
            return state;
    }
}