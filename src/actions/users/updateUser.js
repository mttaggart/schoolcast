import actionTypes from "./actionTypes";
const apiEndpoint = "/api/users/";

export default function updateUser(token, user) {
    return (dispatch) => {
        dispatch(updateUserAttempted());
        const usersRequest = new Request(
            apiEndpoint + user.id,
            {
                method: "PUT",
                body: JSON.stringify(user),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(usersRequest)
        .then( res => res.json())
        .then( json => dispatch(updateUserSucceeded(token, json)))
        .catch( err => dispatch(updateUserRejected(err)));
    }
}

function updateUserAttempted() {
    return {
        type: actionTypes.UPDATE_USER_ATTEMPTED
    }
}

function updateUserRejected(err) {
    return {
        type: actionTypes.UPDATE_USER_REJECTED,
        data: err
    }
}

function updateUserSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_USER_SUCCEEDED,
        data
    }
}