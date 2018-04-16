import { combineReducers } from "redux";
import authReducer from "./authReducer";
import displaysReducer from "./displaysReducer";
import feedsReducer from "./feedsReducer";
import itemsReducer from "./itemsReducer";
import portalsReducer from "./portalsReducer";
import portalTypesReducer from "./portalTypesReducer";
import transitionTypesReducer from "./transitionTypesReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    auth: authReducer,
    displays: displaysReducer,
    feeds: feedsReducer,
    items: itemsReducer,
    portals: portalsReducer,
    portalTypes: portalTypesReducer,
    transitionTypes: transitionTypesReducer,
    users: usersReducer
});

export default reducer;