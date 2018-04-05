import { combineReducers } from "redux";
import authReducer from "./authReducer";
import displaysReducer from "./displaysReducer";
import feedsReducer from "./feedsReducer";
import itemsReducer from "./itemsReducer";
import portalsReducer from "./portalsReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    auth: authReducer,
    displays: displaysReducer,
    feeds: feedsReducer,
    items: itemsReducer,
    portals: portalsReducer,
    users: usersReducer
});

export default reducer;