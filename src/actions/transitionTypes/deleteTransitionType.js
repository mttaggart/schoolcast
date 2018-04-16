import actionTypes from "./actionTypes";
const apiEndpoint = "/api/transitiontypes/";

export default function deleteTransitionType(token, id) {
    return (dispatch) => {
        dispatch(deleteTransitionTypeAttempted());
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
        .then( json => dispatch(deleteTransitionTypeSucceeded(json)))
        .catch( err => dispatch(deleteTransitionTypeRejected(err)));
    }
}


function deleteTransitionTypeAttempted() {
    return {
        type: actionTypes.DELETE_TRANSITIONTYPE_ATTEMPTED
    }
}

function deleteTransitionTypeRejected(err) {
    return {
        type: actionTypes.DELETE_TRANSITIONTYPE_REJECTED,
        data: err
    }
}

function deleteTransitionTypeSucceeded(data) {
    return {
        type: actionTypes.DELETE_TRANSITIONTYPE_SUCCEEDED,
        data
    }
}