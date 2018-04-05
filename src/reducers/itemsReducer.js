import actionTypes from "../actions/items/actionTypes";

export default function items(
    state={
        items: [],
        error: null,
        requested: false
    }, 
    action) {

    switch(action.type) {
        case actionTypes.GET_ITEMS_ATTEMPTED:
            return Object.assign({}, state, {requested: true});
        case actionTypes.GET_ITEMS_REJECTED:
            return Object.assign({}, state, {error: action.data});
        case actionTypes.GET_ITEMS_SUCCEEDED:
            return Object.assign({}, state, {items: action.data});
        case actionTypes.ADD_ITEM_ATTEMPTED:
            return state;
        case actionTypes.ADD_ITEM_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.ADD_ITEM_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    items:state.items.concat([action.data])
                }
            );
        case actionTypes.UPDATE_ITEM_ATTEMPTED:
            return state;
        case actionTypes.UPDATE_ITEM_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.UPDATE_ITEM_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    items: action.data
                }
            );
        case actionTypes.DELETE_ITEM_ATTEMPTED:
            return state;
        case actionTypes.DELETE_ITEM_REJECTED:
            return Object.assign({},state,{error: action.data});
        case actionTypes.DELETE_ITEM_SUCCEEDED:
            return Object.assign(
                {},
                state,
                {
                    requested: false,
                    items: action.data
                }
            );
        default:
            return state;
    }
}