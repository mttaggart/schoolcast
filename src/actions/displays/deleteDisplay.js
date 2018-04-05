import actionTypes from "./actionTypes";
const apiEndpoint = "/api/displays/";

export default function deleteDisplay(token, id) {
    return (dispatch) => {
        dispatch(deleteDisplayAttempted());
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
        .then( json => dispatch(deleteDisplaySucceeded(json)))
        .catch( err => dispatch(deleteDisplayRejected(err)));
    }
}


function deleteDisplayAttempted() {
    return {
        type: actionTypes.DELETE_DISPLAY_ATTEMPTED
    }
}

function deleteDisplayRejected(err) {
    return {
        type: actionTypes.DELETE_DISPLAY_REJECTED,
        data: err
    }
}

function deleteDisplaySucceeded(token, data) {
    return {
        type: actionTypes.DELETE_DISPLAY_SUCCEEDED,
        data
    }
}