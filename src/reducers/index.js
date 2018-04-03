import { combineReducers } from "redux";
import  authReducer from "./authReducer";

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;