import actionTypes from "./actionTypes";
const apiEndPoint = "/api/users";

export default function addUser(token, user) {
    return (dispatch) => {
        dispatch(addUserAttempted());
        console.log(user);
        const usersRequest = new Request(
            apiEndPoint,
            {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(usersRequest)
        .then( res => res.json())
        .then( json => dispatch(addUserSucceeded(token, json)))
        .catch( err => dispatch(addUserRejected(err)));
    }
}

function addUserAttempted() {
    return {
        type: actionTypes.ADD_USER_ATTEMPTED
    }
}

function addUserRejected(err) {
    return {
        type: actionTypes.ADD_USER_REJECTED,
        data: err
    }
}

function addUserSucceeded(token, data) {
    return (dispatch) => {
        return {
            type: actionTypes.ADD_USER_SUCCEEDED,
            data
        }
    }
}