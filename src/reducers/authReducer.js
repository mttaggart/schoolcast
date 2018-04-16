import actionTypes from "../actions/auth/actionTypes";

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
        return Object.assign({}, state, {
          authenticated: action.data.authenticated,
          user: action.data.user,
          token: action.data.token
        });
      case actionTypes.AUTHORIZE_ATTEMPTED:
        return Object.assign({}, state, {
          requested: true
        });
      case actionTypes.AUTHORIZE_REJECTED:
        return Object.assign({}, state, {
          error: action.data
        });
      case actionTypes.AUTHORIZE_ACCEPTED:
        return Object.assign({}, state, {
          authenticated: action.data.authenticated,
          user: action.data.user,
          token: action.data.token
        });
      case actionTypes.LOGOUT_ATTEMPTED:
        return Object.assign({}, state, {
          requested: false
        });
      case actionTypes.LOGOUT_SUCCESSFUL:
        return Object.assign({}, state, {
          authenticated: false,
          user: null,
          token: null
        });
      default:
        return state;   
    }
  }
  