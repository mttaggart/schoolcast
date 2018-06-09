import actionTypes from "./actionTypes";
const apiEndpoint = "/api/auth/logout";

export default function logout(token) {
    return (dispatch) => {
        dispatch(logoutAttempted())
        const logoutRequest = new Request(
            apiEndpoint,
            {
                method: "GET",
                headers: {"x-access-token": token}
            }
        );
        fetch(logoutRequest)
        .then( res => res.json())
        .then( json => {
            return dispatch(logoutSuccessful())
        })
    }
}

function logoutAttempted() {
    return {
        type: actionTypes.LOGOUT_ATTEMPTED
    }
}

function logoutSuccessful() {
    window.sessionStorage.removeItem("token");
    return {
        type: actionTypes.LOGOUT_SUCCESSFUL
    }
}