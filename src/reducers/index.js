import { combineReducers } from "redux";
import  authReducer from "./authReducer";
import usersReducer from "./usersReducer";

const reducer = combineReducers({
    auth: authReducer,
    users: usersReducer
});

export default reducer;