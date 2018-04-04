import actionTypes from "./actionTypes";
const apiEndPoint = "/api/users";

export default function getUsers(token) {
    return (dispatch) => {
        console.log("Getting users");
        dispatch(getUsersAttempted());
        const usersRequest = new Request(
            apiEndPoint,
            {
                method: "GET",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(usersRequest)
        .then( res => res.json())
        .then( json => dispatch(getUsersSucceeded(json)))
        .catch( err => dispatch(getUsersRejected(err)));
    }
}

function getUsersAttempted() {
    return {
        type: actionTypes.GET_USERS_ATTEMPTED
    }
}

function getUsersRejected(err) {
    return {
        type: actionTypes.GET_USERS_REJECTED,
        data: err
    }
}

function getUsersSucceeded(data) {
    return {
        type: actionTypes.GET_USERS_SUCCEEDED,
        data
    }
}