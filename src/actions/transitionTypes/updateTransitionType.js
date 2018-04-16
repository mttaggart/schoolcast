import actionTypes from "./actionTypes";
const apiEndpoint = "/api/transitiontypes/";

export default function updateTransitionType(token, transitionType) {
    return (dispatch) => {
        dispatch(updateTransitionTypeAttempted());
        const transitionTypesRequest = new Request(
            apiEndpoint + transitionType.id,
            {
                method: "PUT",
                body: JSON.stringify(transitionType),
                headers: {
                    "x-access-token": token,
                    "content-type": "application/json"
                }
            }
        );
        fetch(transitionTypesRequest)
        .then( res => res.json())
        .then( json => dispatch(updateTransitionTypeSucceeded(token, json)))
        .catch( err => dispatch(updateTransitionTypeRejected(err)));
    }
}

function updateTransitionTypeAttempted() {
    return {
        type: actionTypes.UPDATE_TRANSITIONTYPE_ATTEMPTED
    }
}

function updateTransitionTypeRejected(err) {
    return {
        type: actionTypes.UPDATE_TRANSITIONTYPE_REJECTED,
        data: err
    }
}

function updateTransitionTypeSucceeded(token, data) {
    return {
        type: actionTypes.UPDATE_TRANSITIONTYPE_SUCCEEDED,
        data
    }
}