import { actionTypes } from "../actions/login";

export default function auth(state={
    requested: false,
    authenticated: false,
    error: null,
    user: null,
    token: null,
}, action) {
    switch(action.type) {
      case actionTypes.LOGIN_ATTEMPTED:
        return Object.assign({}, state, {
          requested: true
        });
      case actionTypes.LOGIN_REJECTED:
        return Object.assign({}, state, {
          error: action.data
        });
      case actionTypes.LOGIN_ACCEPTED:
        const newState = Object.assign({}, state, {
          authenticated: action.data.authenticated,
          user: action.data.user,
          token: action.data.token
        });
        return newState;
      default:
        return state;   
    }
  }
  