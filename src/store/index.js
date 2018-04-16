import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "../reducers";

const initialState = {
    auth: {
        authenticated: false,
        requested: false,
        token: null,
        user: null,
        error: null
    },
    displays: {
        displays: [],
        requested: false,
        error: null
    },
    feeds: {
        feeds: [],
        requested: false,
        error: null
    },
    items: {
        items: [],
        requested: false,
        error: null
    },
    portals: {
        portals: [],
        requested: false,
        error: null
    },
    portalTypes: {
        portalTypes: [],
        requested: false,
        error: null
    },
    users: {
        users: [],
        requested: false,
        error: null
    }
};

const middleware = [ ReduxThunk ];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;