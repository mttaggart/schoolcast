import actionTypes from "./actionTypes";
const apiEndpoint = "/api/users/";

export default function deleteUser(token, id) {
    return (dispatch) => {
        dispatch(deleteUserAttempted());
        const deleteRequest = new Request(
            apiEndpoint + id,
            {
                method: "DELETE",
                headers: {
                    "x-access-token": token
                }
            }
        );
        fetch(deleteRequest)
        .then( res => res.json())
        .then( json => dispatch(deleteUserSucceeded(json)))
        .catch( err => dispatch(deleteUserRejected(err)));
    }
}


function deleteUserAttempted() {
    return {
        type: actionTypes.DELETE_USER_ATTEMPTED
    }
}

function deleteUserRejected(err) {
    return {
        type: actionTypes.DELETE_USER_REJECTED,
        data: err
    }
}

function deleteUserSucceeded(token, data) {
    return (dispatch) => {
        return {
            type: actionTypes.DELETE_USER_SUCCEEDED,
            data
        }
    }
}