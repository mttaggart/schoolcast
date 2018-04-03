const apiEndoint = "/api/auth/login";

export const actionTypes = {
    LOGIN_ATTEMPTED: "LOGIN_ATTEMPTED",
    LOGIN_ACCEPTED: "LOGIN_ACCEPTED",
    LOGIN_REJECTED: "LOGIN_REJECTED"
}

export function login(email, password, history) {
    return (dispatch) => {
        dispatch(loginAttemped());
        const loginRequest = new Request(
            apiEndoint,
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