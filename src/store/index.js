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
    users: [],
    displays: [],
    feeds: [],
    items: [],
    portals: []
};

const middleware = [ ReduxThunk ];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;