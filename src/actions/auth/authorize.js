import actionTypes from "./actionTypes";
const apiEndpoint = "/api/auth/authorize";

export default function authorize(token) {
    return (dispatch) => {
        dispatch(authorizeAttempted());
        const authorizeRequest = new Request(
            apiEndpoint,
            {   
                headers: {
                    "content-type": "application/json",
                    "x-access-token": token
                }
            }
        );
        fetch(authorizeRequest)
        .then( res => res.json())
        .then( json => dispatch(authorizeAccepted(json)))
        .catch( err => dispatch(authorizeRejected(err)));
    }
}

function authorizeAttempted() {
    return {
        type: actionTypes.AUTHORIZE_ATTEMPTED
    }
}

function authorizeRejected(data) {
    return {
        type: actionTypes.AUTHORIZE_REJECTED,
        data
    }
}

function authorizeAccepted(data) {
    window.sessionStorage.setItem("token",data.token);
    return {
        type: actionTypes.AUTHORIZE_ACCEPTED,
        data
    }
}