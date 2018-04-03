import actionTypes from "./actionTypes";
const apiEndpoint = "/api/auth/login";

export default function login(email, password) {
    return (dispatch) => {
        dispatch(loginAttemped());
        const loginRequest = new Request(
            apiEndpoint,
            {
                method: "POST",
                body: JSON.stringify({email, password}),
                headers: {
                    "content-type": "application/json"
                }
            }
        );
        fetch(loginRequest)
        .then( res => { return res.json()})
        .then( json => {
            if (!json.authenticated) {
                return dispatch(loginRejected("invalid email/password"));
            }
            return dispatch(loginAccepted(json));
        })
        .catch( err => {
            dispatch(loginRejected("Something went wrong!"));
        })
    }
}


function loginAttemped() {
    return {
        type: actionTypes.LOGIN_ATTEMPTED
    }
}

function loginRejected(data) {
    return {
        type: actionTypes.LOGIN_REJECTED,
        data
    }
}

function loginAccepted(data) {
    return {
        type: actionTypes.LOGIN_ACCEPTED,
        data
    }
}